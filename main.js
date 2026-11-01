/* =========================================================
   Pizno агенція — loader, smooth scroll and scroll animations.
   Усі тексти лежать прямо в index.html.
   ========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = matchMedia("(pointer: fine)").matches;
const hasGsap = !!(window.gsap && window.ScrollTrigger);

/* ---------- split headings into words for the mask reveal ---------- */
function splitWords(el) {
  const walk = node => [...node.childNodes].forEach(n => {
    if (n.nodeType === 3) {
      const frag = document.createDocumentFragment();
      n.textContent.split(/(\s+)/).forEach(p => {
        if (!p) return;
        if (/^\s+$/.test(p)) { frag.append(p); return; }
        const w = document.createElement("span"); w.className = "w";
        const i = document.createElement("span"); i.textContent = p;
        w.append(i); frag.append(w);
      });
      n.replaceWith(frag);
    } else if (n.nodeType === 1) walk(n);
  });
  walk(el);
  $$(".w > span", el).forEach((s, i) => s.style.transitionDelay = (i * 0.045) + "s");
}
$$(".split").forEach(splitWords);

/* ---------- smooth scroll ---------- */
let lenis = null;
if (!reduce && window.Lenis) {
  lenis = new Lenis({ duration: 1.15, easing: x => Math.min(1, 1.001 - Math.pow(2, -10 * x)), touchMultiplier: 1.4 });
  if (hasGsap) {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  } else {
    requestAnimationFrame(function raf(time) { lenis.raf(time); requestAnimationFrame(raf); });
  }
  lenis.stop();
}
$$('a[href^="#"]').forEach(a => a.addEventListener("click", e => {
  const target = $(a.getAttribute("href"));
  if (!target) return;
  e.preventDefault();
  lenis ? lenis.scrollTo(target, { duration: 1.5, offset: -40 }) : target.scrollIntoView({ behavior: "smooth" });
}));

/* ---------- loader: waits for fonts, min 1.1 s, max 4 s ---------- */
function runLoader() {
  return new Promise(resolve => {
    if (reduce || document.documentElement.classList.contains("seen")) { resolve(false); return; }
    const fill = $("#loaderFill"), bar = $("#loaderBar"), count = $("#loaderCount");
    let fontsReady = false;
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => fontsReady = true);
    const t0 = performance.now(), MIN = 1100, CAP = 4000;
    let shown = 0;
    (function tick(now) {
      const elapsed = now - t0;
      const target = (fontsReady || elapsed > CAP) ? Math.min(1, elapsed / MIN) : Math.min(.85, elapsed / MIN);
      shown += (target - shown) * 0.14;
      if (target === 1 && shown > .995) shown = 1;
      fill.style.setProperty("--p", (shown * 100).toFixed(1) + "%");
      bar.style.transform = `scaleX(${shown})`;
      count.textContent = String(Math.round(shown * 100)).padStart(3, "0");
      if (shown >= 1) {
        try { sessionStorage.setItem("pizno-seen", "1"); } catch (e) {}
        resolve(true); return;
      }
      requestAnimationFrame(tick);
    })(t0);
  });
}

function leaveLoader(animated) {
  const loader = $("#loader");
  document.body.classList.remove("is-loading");
  if (lenis) lenis.start();
  if (!animated || !hasGsap) { loader.style.display = "none"; heroIntro(); return; }
  gsap.timeline()
    .to(".loader-word, .loader-row", { yPercent: -40, opacity: 0, duration: .55, ease: "power3.in", stagger: .04 })
    .to(loader, { yPercent: -100, duration: .95, ease: "expo.inOut" }, "-=.2")
    .add(heroIntro, "-=.5")
    .set(loader, { display: "none" });
}

function heroIntro() {
  $$(".hero .split, .hero .reveal").forEach(el => el.classList.add("in"));
  $(".dms").classList.add("go");
  if (!hasGsap || reduce) return;
  gsap.from(".hero .sticker", { y: 20, rotate: -10, opacity: 0, duration: .9, ease: "back.out(2)" });
  gsap.from(".hero .phone", { y: 120, rotate: 6, opacity: 0, duration: 1.3, ease: "expo.out", delay: .15 });
  gsap.from(".badge", { scale: 0, rotate: -90, duration: 1.1, ease: "expo.out", delay: .5 });
}

/* ---------- reveals (fire once) ---------- */
const io = new IntersectionObserver(entries => entries.forEach(en => {
  if (!en.isIntersecting) return;
  en.target.classList.add("in");
  io.unobserve(en.target);
}), { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });
$$(".reveal, .split").forEach(el => { if (!el.closest(".hero")) io.observe(el); });

/* ---------- scroll progress ---------- */
const progress = $("#progress");
function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- magnetic buttons ---------- */
if (fine && !reduce) {
  $$(".magnetic").forEach(b => {
    b.addEventListener("mousemove", e => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.2}px, ${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
    });
    b.addEventListener("mouseleave", () => {
      b.style.transition = "transform .6s cubic-bezier(.16,1,.3,1)"; b.style.transform = "";
      setTimeout(() => b.style.transition = "", 600);
    });
  });
}

/* ---------- GSAP scenes ---------- */
if (hasGsap && !reduce) {
  gsap.registerPlugin(ScrollTrigger);

  // marquee: endless, speeds up with scroll velocity
  const mq = gsap.to("#marquee", { xPercent: -50, duration: 26, ease: "none", repeat: -1 });
  if (lenis) lenis.on("scroll", ({ velocity }) => {
    gsap.to(mq, { timeScale: 1 + Math.min(Math.abs(velocity) * 0.25, 6), duration: .3, overwrite: true });
    gsap.to(mq, { timeScale: 1, duration: 1.2, delay: .3 });
  });

  // hero: background word drifts, phone lifts
  gsap.to(".hero-bg", { xPercent: -8, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  gsap.to(".hero-visual", { y: -80, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

  // system numbers slide in from the side
  $$(".sys-n").forEach(n => gsap.from(n, { xPercent: -40, opacity: 0, ease: "expo.out", duration: 1.2, scrollTrigger: { trigger: n, start: "top 85%" } }));

  // timeline line draws with scroll
  const mm = gsap.matchMedia();
  mm.add("(min-width: 961px)", () => {
    gsap.fromTo("#tlLine", { scaleX: 0, scaleY: 1 }, { scaleX: 1, ease: "none", scrollTrigger: { trigger: ".timeline", start: "top 80%", end: "bottom 60%", scrub: true } });
  });
  mm.add("(max-width: 960px)", () => {
    gsap.fromTo("#tlLine", { scaleY: 0, scaleX: 1 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".timeline", start: "top 80%", end: "bottom 60%", scrub: true } });
  });

  // big CTA heading scales up a touch as it arrives
  gsap.from(".cta h2", { scale: .92, transformOrigin: "left bottom", ease: "none", scrollTrigger: { trigger: ".cta", start: "top bottom", end: "top 30%", scrub: true } });

  addEventListener("load", () => ScrollTrigger.refresh());
} else {
  const line = $("#tlLine"); if (line) line.style.transform = "none";
}

/* ---------- lead form → /api/lead → Telegram bot ----------
   If the API is unreachable (local preview, a host without the function,
   or the bot is not configured yet), the form falls back to a prefilled
   Telegram message, so no lead is lost. */
const TG_USERNAME = "Pa9krat";
const dlg = $("#leadDialog"), form = $("#leadForm"), done = $("#leadDone");
const errBox = $("#leadError"), submitBtn = $("#leadSubmit"), fallback = $("#leadFallback");

function openLead() {
  form.hidden = false; done.hidden = true; errBox.textContent = "";
  if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
  if (lenis) lenis.stop();
  setTimeout(() => $("#leadName").focus(), 60);
}
function closeLead() {
  if (typeof dlg.close === "function") dlg.close(); else dlg.removeAttribute("open");
}
dlg.addEventListener("close", () => { if (lenis) lenis.start(); });
dlg.addEventListener("click", e => { if (e.target === dlg) closeLead(); });
$$("[data-open-lead]").forEach(b => b.addEventListener("click", openLead));
$$("[data-close-lead]").forEach(b => b.addEventListener("click", closeLead));

function leadText(d) {
  return [
    "Привіт! Хочу безкоштовний розбір Instagram.",
    `Ім’я: ${d.name}`,
    `Instagram: ${d.instagram}`,
    `Спорт: ${d.sport}`,
    d.city && `Місто: ${d.city}`,
    `Зв’язок: ${d.contact}`,
    d.goal && `Мета: ${d.goal}`,
  ].filter(Boolean).join("\n");
}

form.addEventListener("submit", async e => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(form).entries());
  Object.keys(d).forEach(k => d[k] = String(d[k]).trim());

  const required = [["name", "#leadName"], ["instagram", "#leadInsta"], ["contact", "#leadContact"]];
  let firstBad = null;
  required.forEach(([k, sel]) => {
    const el = $(sel), bad = !d[k];
    el.setAttribute("aria-invalid", bad);
    if (bad && !firstBad) firstBad = el;
  });
  if (firstBad) { errBox.textContent = "Заповни ім’я, Instagram і куди тобі написати."; firstBad.focus(); return; }
  errBox.textContent = "";

  submitBtn.disabled = true;
  submitBtn.firstChild.textContent = "Надсилаємо… ";
  let sent = false;
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 8000);
    const r = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d), signal: ctrl.signal });
    clearTimeout(timer);
    sent = r.ok && (await r.json().catch(() => ({}))).ok === true;
  } catch (err) { sent = false; }
  submitBtn.disabled = false;
  submitBtn.firstChild.textContent = "Надіслати анкету ";

  form.hidden = true; done.hidden = false;
  if (sent) {
    $("#leadDoneTitle").textContent = "Анкету отримано";
    $("#leadDoneText").textContent = "Подивимось твій профіль і напишемо в Telegram або за номером, який ти залишив.";
    fallback.hidden = true;
    form.reset();
  } else {
    $("#leadDoneTitle").textContent = "Останній крок";
    $("#leadDoneText").textContent = "Натисни кнопку нижче: відкриється Telegram з уже заповненою анкетою. Залишиться тільки надіслати.";
    fallback.href = `https://t.me/${TG_USERNAME}?text=${encodeURIComponent(leadText(d))}`;
    fallback.hidden = false;
  }
});

/* ---------- start ---------- */
runLoader().then(leaveLoader);
