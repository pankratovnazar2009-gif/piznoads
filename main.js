/* =========================================================
   pizno — тексти (UA / EN) і вся анімація сайту.
   Тексти правте в T нижче: ключ = атрибут data-t в index.html.
   ========================================================= */
const T = {
  uk: {
    title: "Портфоліо pizno",
    loaderLabel: "Завантаження",
    navWork: "Роботи", navServices: "Послуги", navProcess: "Процес", navContact: "Контакт", navCta: "Написати в Telegram",
    hudIntro: "Інтро", hudPrinciple: "Принцип", hudWork: "Ролики", hudHowto: "Як це працює", hudCases: "Кейси",
    hudMeta: "Реклама в Meta", hudNfc: "NFC-відгуки", hudSites: "Сайти", hudBots: "Боти", hudNeeds: "Від вас", hudProcess: "Процес", hudContact: "Контакт",
    heroKicker: "Студія реклами для локального бізнесу",
    heroTitle: "Портфоліо",
    heroSub: "Робимо рекламу, яка з першої секунди б’є в біль власника — і веде клієнтів у директ.",
    stat1: "рекламних роликів", stat2: "інструментів просування", stat3: "щоб зачепити", sec: "с",
    mqSites: "Сайти", mqBots: "Боти",
    sound: "Звук", soundOff: "Без звуку", soundOn: "Звук увімк.",

    prLabel: "01 — Принцип",
    prStatement: "Кожен ролик починається з того, де бізнес втрачає гроші.",
    pr1k: "0–3 с · Біль", pr1h: "«Готуєте краще, а гості йдуть до сусіда»", pr1p: "Власник впізнає себе з першої секунди — і не гортає далі.",
    pr2k: "3–20 с · Рішення", pr2h: "Продукт — як вихід із болі", pr2p: "Картка, сайт чи бот з’являються як відповідь на проблему, а не як реклама «про нас».",
    pr3k: "Фінал · Одна дія", pr3h: "Одне слово в коментарях", pr3p: "«КАРТКА», «ЗІРКА», «ПРАПОР». Кожен коментар — привід написати власнику в директ.",
    prNote: "Цифри в роликах — тільки з джерелом або з чесною позначкою «приклад».",

    wkLabel: "02 — Відео-реклама",
    wkTitle: "Ролики для Reels і TikTok",
    wkSub: "Відео — інструмент просування: ролик чіпляє болем і веде в директ, а не просто «гарно виглядає». Натисніть на ролик, щоб увімкнути звук.",
    r1: "Сусід забирає гостей", r2: "Скільки коштує 1 зірка", r3: "4 червоні прапорці", r4: "7 днів з однією карткою",
    r5: "Ти спиш — клієнт іде", r6: "Нічні заявки", r7: "20 кліпів з 1 запису", tagBots: "Боти",
    wkEnd: "15+ роликів і далі",
    wkFormat: "1080×1920 · 20–70 с · озвучка, титри під голос, звук",

    hwLabel: "Як це працює",
    hwTitle: "Ви знімаєте — ми робимо з цього рекламу",
    hw1: "Раз на тиждень ваша людина знімає матеріал на телефон — за нашим списком кадрів.",
    hw2: "Ми пишемо сценарій: хук на біль, текст для озвучки, заклик.",
    hw3: "Монтуємо ролики: титри під голос, графіка, звук.",
    hw4: "Запускаємо в Meta на потрібну аудиторію і рахуємо заявки.",
    hwCalloutK: "Важливо",
    hwCalloutH: "Зйомку ми не робимо",
    hwCalloutP: "Ми — про просування. Потрібна фізична людина з вашого боку — власник, адміністратор чи співробітник, — яка раз на тиждень знімає відео.",
    hwCalloutWhat: "Що знімати: процес роботи, продукт крупним планом, команду, гостей (з їхньої згоди). Частину роликів робимо без зйомки — на графіці й озвучці.",

    csLabel: "Кейс-ролики",
    lblPain: "Біль", lblFix: "Рішення", lblCta: "Заклик", lblFinal: "Фінал",
    c1k: "Кейс-ролик · NFC-картки",
    c1h: "«Готуєте краще. А гості йдуть до сусіда»",
    c1pain: "У сусіда 4,8 і 312 відгуків, у вас — 4,2 і 19. Гість обирає не вас.",
    c1fix: "NFC-картка на столі: одне торкання телефоном — і відгук уже відкритий.",
    c1cta: "«Напишіть КАРТКА в коментарях» — кожен коментар веде в директ.",
    c1meta: "27 с · 1080×1920 · голос, титри, звук",
    c2k: "Кейс-ролик · трендовий формат",
    c2h: "«4 червоні прапорці, які гість бачить до входу»",
    f1: "Останній відгук — 7 місяців тому", f2: "Менше 50 відгуків", f3: "Рейтинг нижче 4,5", f4: "Жодного фото від гостей",
    c2fin: "Картка перевертає прапорці на зелені. Заклик: «ПРАПОР» — безкоштовна перевірка закладу.",
    c2meta: "36 с · формат «red flags» впізнають з першої секунди",

    mtLabel: "03 — Реклама в Meta",
    mtTitle: "Ролик готовий — запускаємо в Instagram і Facebook",
    mt1h: "Мета кампанії", mt1p: "Повідомлення, ліди чи трафік — під задачу бізнесу, а не охоплення заради охоплення.",
    mt2h: "Аудиторія", mt2p: "Гео навколо закладу, інтереси, схожі аудиторії на основі ваших клієнтів.",
    mt3h: "A/B-тест хуків", mt3p: "Запускаємо 2–3 варіанти перших секунд і залишаємо той, що дає дешевші заявки.",
    mt4h: "Ретаргетинг", mt4p: "Догоняємо тих, хто дивився ролик чи заходив у профіль, але ще не написав.",
    mt5h: "Заявки", mt5p: "Лід-форма або повідомлення в директ — жодна заявка не губиться.",
    mt6h: "Звіт у цифрах", mt6p: "Ціна заявки, CTR і кількість звернень — прямо з рекламного кабінету.",
    mtNote: "Орієнтир ринку: CTR лід-кампаній у Meta — 2,70%, конверсія — 8,54% (LocaliQ, Facebook Ads Benchmarks 2026, дані США).",

    nfcWord: "Відгук ★ Відгук ★ Відгук ★ Відгук ★ Відгук ★",
    nfLabel: "04 — NFC-відгуки",
    nfTitle: "Одне торкання — і відгук уже відкритий",
    nf1: "Картка лежить на кожному столі", nf2: "Гість торкається її телефоном", nf3: "Одразу відкривається відгук у Google",
    nfStat: "виручки дає +1 зірка в рейтингу незалежного ресторану",
    nfSrc: "M. Luca, Harvard Business School · дані Yelp",
    nfFitTitle: "Працює тільки там, де гості залишають відгуки в Google",
    nfYesK: "Підходить", nfYesLead: "Є профіль у Google Картах, і клієнти приходять фізично:",
    nfYesList: "<li>Ресторани, кав’ярні, бари</li><li>Салони краси, барбершопи</li><li>Клініки, стоматології</li><li>СТО, автомийки</li><li>Готелі, фітнес-клуби</li>",
    nfNoK: "Не підходить", nfNoLead: "Немає точки, куди приходить клієнт, або профілю в Google Картах:",
    nfNoList: "<li>Інтернет-магазини без офлайн-точки</li><li>Послуги з виїздом без адреси на картах</li><li>B2B без потоку клієнтів на місці</li>",
    nfWhy: "<b>Навіщо:</b> більше свіжих відгуків → вищий рейтинг → вище в Google Картах → більше гостей.",

    stLabel: "05 — Сайти під Google Ads · додатково",
    stTitle: "Реклама приводить. Сайт — продає.",
    stP1: "Робимо сайт за вимогами Google Ads: швидкий, з тим самим офером, що в оголошенні, і з формою заявки на першому екрані.",
    stP2: "Google враховує якість посадкової сторінки в показнику якості оголошення: що він вищий, то дешевший клік і вищі позиції.",

    btLabel: "06 — Telegram-боти · додатково",
    btTitle: "Клієнт пише о 23:47. Бот відповідає одразу.",
    btP1: "Бот приймає запис 24/7 і передає заявку вам — навіть коли ви спите.",
    btP2: "Рекламу для ботів теж робимо: серія роликів про нічні заявки, які йдуть до конкурента.",
    btQuote: "«Ось так твій бізнес втрачає клієнтів, поки ти спиш»",

    ndTitle: "Що потрібно від вас",
    nd1h: "Для відео", nd1p: "Людина, яка раз на тиждень знімає матеріал на телефон за нашим списком кадрів.",
    nd2h: "Для реклами в Meta", nd2p: "Доступ до сторінок Instagram і Facebook та рекламний бюджет.",
    nd3h: "Для NFC-карток", nd3p: "Профіль вашого закладу в Google Картах.",
    nd4h: "Для сайту", nd4p: "Інформація про послуги, ціни та фото.",
    nd5h: "Для бота", nd5p: "Список послуг, графік роботи і хто приймає заявки.",
    nd6h: "Завжди", nd6p: "Швидко відповідати тим, хто написав. Реклама приводить — продаєте ви.",

    psTitle: "Як працюємо",
    ps1h: "Розмова", ps1p: "Знаходимо, де бізнес втрачає клієнтів: відгуки, директ, сайт.",
    ps2h: "Сценарій", ps2p: "Хук на біль, текст для озвучки, заклик з кодовим словом.",
    ps3h: "Ролик", ps3p: "Монтаж, титри точно під голос, звук. Готово до публікації.",
    ps4h: "Заявки", ps4p: "Запускаємо в Meta: коментар → директ → клієнт. За потреби — картки, сайт чи бот.",

    ctKicker: "Наступний кейс — ваш",
    ctTitle: "Безкоштовно покажемо, де ваш бізнес втрачає клієнтів",
    footer: "Реклама · Reels · Meta · NFC · Сайти · Боти",
  },
  en: {
    title: "pizno Portfolio",
    loaderLabel: "Loading",
    navWork: "Work", navServices: "Services", navProcess: "Process", navContact: "Contact", navCta: "Message on Telegram",
    hudIntro: "Intro", hudPrinciple: "Principle", hudWork: "Videos", hudHowto: "How it works", hudCases: "Cases",
    hudMeta: "Meta ads", hudNfc: "NFC reviews", hudSites: "Websites", hudBots: "Bots", hudNeeds: "From you", hudProcess: "Process", hudContact: "Contact",
    heroKicker: "Ad studio for local business",
    heroTitle: "Portfolio",
    heroSub: "We make ads that hit the owner’s pain in the first second — and send customers to the DMs.",
    stat1: "ad videos", stat2: "growth tools", stat3: "to hook", sec: "s",
    mqSites: "Websites", mqBots: "Bots",
    sound: "Sound", soundOff: "Muted", soundOn: "Sound on",

    prLabel: "01 — Principle",
    prStatement: "Every video starts where the business is losing money.",
    pr1k: "0–3 s · Pain", pr1h: "“You cook better, but guests go next door”", pr1p: "The owner recognises themselves in the first second — and stops scrolling.",
    pr2k: "3–20 s · Solution", pr2h: "The product as the way out", pr2p: "A card, a website or a bot appears as the answer to the problem — not as an ad about us.",
    pr3k: "Final · One action", pr3h: "One word in the comments", pr3p: "“CARD”, “STAR”, “FLAG”. Every comment is a reason to message the owner.",
    prNote: "Numbers in our videos always come with a source — or an honest “example” label.",

    wkLabel: "02 — Video ads",
    wkTitle: "Videos for Reels & TikTok",
    wkSub: "Video is a growth tool: it hooks with a pain point and leads to the DMs — it doesn’t just look nice. Click a video to turn the sound on.",
    r1: "The neighbour takes your guests", r2: "What one star is worth", r3: "4 red flags", r4: "7 days with one card",
    r5: "You sleep, the client leaves", r6: "Night-time leads", r7: "20 clips from 1 recording", tagBots: "Bots",
    wkEnd: "15+ videos and counting",
    wkFormat: "1080×1920 · 20–70 s · voice-over, synced captions, sound",

    hwLabel: "How it works",
    hwTitle: "You film — we turn it into ads",
    hw1: "Once a week your person films footage on a phone — from our shot list.",
    hw2: "We write the script: a pain-point hook, voice-over text, a call to action.",
    hw3: "We edit the videos: captions synced to the voice, graphics, sound.",
    hw4: "We launch in Meta to the right audience and count the leads.",
    hwCalloutK: "Important",
    hwCalloutH: "We don’t do filming",
    hwCalloutP: "We do promotion. You need a real person on your side — the owner, an admin or a team member — who films video once a week.",
    hwCalloutWhat: "What to film: the work process, product close-ups, the team, guests (with their consent). Some videos need no filming — we make them with graphics and voice-over.",

    csLabel: "Case videos",
    lblPain: "Pain", lblFix: "Solution", lblCta: "Call to action", lblFinal: "Final",
    c1k: "Case video · NFC cards",
    c1h: "“You cook better. But guests go next door”",
    c1pain: "The neighbour has 4.8 and 312 reviews, you have 4.2 and 19. Guests don’t pick you.",
    c1fix: "An NFC card on the table: one tap of the phone — and the review is already open.",
    c1cta: "“Comment CARD” — every comment leads to the DMs.",
    c1meta: "27 s · 1080×1920 · voice, captions, sound",
    c2k: "Case video · trending format",
    c2h: "“4 red flags guests see before walking in”",
    f1: "Last review 7 months ago", f2: "Fewer than 50 reviews", f3: "Rating below 4.5", f4: "No photos from guests",
    c2fin: "The card flips the flags to green. Call to action: “FLAG” — a free check of your venue.",
    c2meta: "36 s · the “red flags” format is recognised instantly",

    mtLabel: "03 — Meta ads",
    mtTitle: "The video is ready — we launch it on Instagram and Facebook",
    mt1h: "Campaign goal", mt1p: "Messages, leads or traffic — matched to the business task, not reach for its own sake.",
    mt2h: "Audience", mt2p: "Geo around your venue, interests, lookalike audiences based on your customers.",
    mt3h: "Hook A/B tests", mt3p: "We run 2–3 versions of the first seconds and keep the one with cheaper leads.",
    mt4h: "Retargeting", mt4p: "We reach people who watched the video or visited the profile but haven’t written yet.",
    mt5h: "Leads", mt5p: "A lead form or a DM — no lead gets lost.",
    mt6h: "Report in numbers", mt6p: "Cost per lead, CTR and the number of enquiries — straight from the ad account.",
    mtNote: "Market benchmark: Meta lead campaigns average 2.70% CTR and 8.54% conversion (LocaliQ, Facebook Ads Benchmarks 2026, US data).",

    nfcWord: "Review ★ Review ★ Review ★ Review ★ Review ★",
    nfLabel: "04 — NFC reviews",
    nfTitle: "One tap — and the review is already open",
    nf1: "A card sits on every table", nf2: "The guest taps it with a phone", nf3: "A Google review opens instantly",
    nfStat: "more revenue from +1 star for an independent restaurant",
    nfSrc: "M. Luca, Harvard Business School · Yelp data",
    nfFitTitle: "It only works where guests leave Google reviews",
    nfYesK: "A good fit", nfYesLead: "You have a Google Maps profile and customers visit in person:",
    nfYesList: "<li>Restaurants, cafés, bars</li><li>Beauty salons, barbershops</li><li>Clinics, dentists</li><li>Car services, car washes</li><li>Hotels, gyms</li>",
    nfNoK: "Not a fit", nfNoLead: "No place customers visit, or no Google Maps profile:",
    nfNoList: "<li>Online shops without a physical store</li><li>Call-out services with no address on maps</li><li>B2B with no walk-in customers</li>",
    nfWhy: "<b>Why:</b> more fresh reviews → higher rating → higher on Google Maps → more guests.",

    stLabel: "05 — Websites for Google Ads · add-on",
    stTitle: "Ads bring people in. The website sells.",
    stP1: "We build websites to Google Ads requirements: fast, with the same offer as the ad, and a lead form on the first screen.",
    stP2: "Google counts landing page experience in the ad’s Quality Score: the higher it is, the cheaper the click and the better the position.",

    btLabel: "06 — Telegram bots · add-on",
    btTitle: "A customer writes at 23:47. The bot answers instantly.",
    btP1: "The bot takes bookings 24/7 and passes the request to you — even while you sleep.",
    btP2: "We make ads for bots too: a video series about night-time leads that go to competitors.",
    btQuote: "“This is how your business loses customers while you sleep”",

    ndTitle: "What we need from you",
    nd1h: "For video", nd1p: "A person who films footage on a phone once a week, from our shot list.",
    nd2h: "For Meta ads", nd2p: "Access to your Instagram and Facebook pages, and an ad budget.",
    nd3h: "For NFC cards", nd3p: "Your venue’s Google Maps profile.",
    nd4h: "For a website", nd4p: "Information about your services, prices and photos.",
    nd5h: "For a bot", nd5p: "A list of services, opening hours and who handles the requests.",
    nd6h: "Always", nd6p: "Reply fast to people who write. Ads bring them in — you make the sale.",

    psTitle: "How we work",
    ps1h: "Talk", ps1p: "We find where the business is losing customers: reviews, DMs, website.",
    ps2h: "Script", ps2p: "A pain-point hook, voice-over text, a call to action with a code word.",
    ps3h: "Video", ps3p: "Editing, captions synced to the voice, sound. Ready to publish.",
    ps4h: "Leads", ps4p: "We launch in Meta: comment → DM → customer. Cards, a website or a bot if needed.",

    ctKicker: "The next case is yours",
    ctTitle: "We’ll show you for free where your business loses customers",
    footer: "Ads · Reels · Meta · NFC · Websites · Bots",
  },
};

/* ===================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = matchMedia("(pointer: fine)").matches;
const hasGsap = !!(window.gsap && window.ScrollTrigger);

let lang = (() => {
  const q = new URLSearchParams(location.search).get("lang");
  if (q === "en" || q === "uk") return q;
  try { const s = localStorage.getItem("pizno-lang"); if (s === "en" || s === "uk") return s; } catch (e) {}
  return "uk";
})();
const t = k => T[lang][k] ?? T.uk[k] ?? "";

/* ---------- text ---------- */
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
  $$(".w > span", el).forEach((s, i) => s.style.transitionDelay = (i * 0.04) + "s");
}

function splitChars(el) {
  const text = el.textContent;
  el.setAttribute("aria-label", text);
  el.innerHTML = [...text].map(c => `<span class="ch-mask" aria-hidden="true"><span class="ch">${c}</span></span>`).join("");
}

function render() {
  document.documentElement.lang = lang;
  document.title = t("title");
  $$("[data-t]").forEach(el => el.innerHTML = t(el.dataset.t));
  $$(".split, .split-fade").forEach(splitWords);
  splitChars($("#heroTitle"));
  $$("[data-lang]").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  $$(".phone[data-cursor]").forEach(p => p.dataset.sound = t("soundOff"));
}
render();

// language switch re-renders in place: already revealed text stays visible
let hudKey = "hudIntro";
$$("[data-lang]").forEach(b => b.addEventListener("click", () => {
  if (b.dataset.lang === lang) return;
  lang = b.dataset.lang;
  try { localStorage.setItem("pizno-lang", lang); } catch (e) {}
  try { const u = new URL(location.href); u.searchParams.set("lang", lang); history.replaceState(null, "", u); } catch (e) {}
  render();
  $$(".split").forEach(el => el.classList.add("in"));
  $$(".statement .w").forEach(w => w.style.opacity = 1);
  $$("#heroTitle .ch").forEach(c => c.style.transform = "none");
  const hn = $("#hudName"); if (hn) hn.textContent = t(hudKey);
  if (window.ScrollTrigger) ScrollTrigger.refresh();
}));

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
  lenis ? lenis.scrollTo(target, { duration: 1.6 }) : target.scrollIntoView({ behavior: "smooth" });
}));

/* ---------- loader: real asset progress, capped ---------- */
function runLoader() {
  return new Promise(resolve => {
    const skip = reduce || document.documentElement.classList.contains("seen");
    if (skip) { resolve(); return; }

    const fill = $("#loaderFill"), bar = $("#loaderBar"), count = $("#loaderCount");
    const tasks = [document.fonts ? document.fonts.ready : Promise.resolve()];
    $$("video[data-hero]").forEach(v => {
      v.src = v.dataset.src;
      tasks.push(new Promise(r => { v.addEventListener("loadeddata", r, { once: true }); v.addEventListener("error", r, { once: true }); }));
    });
    $$(".hero-phones video").forEach(v => tasks.push(new Promise(r => { const i = new Image(); i.onload = i.onerror = r; i.src = v.poster; })));

    let done = 0; const total = tasks.length;
    tasks.forEach(p => p.then(() => done++));
    const t0 = performance.now(), MIN = 1300, CAP = 4500;
    let shown = 0;

    (function tick(now) {
      const elapsed = now - t0;
      const target = Math.min(done / total, elapsed / MIN, 1);
      const forced = elapsed > CAP;
      shown += ((forced ? 1 : target) - shown) * 0.12;
      if ((done === total && elapsed > MIN) || forced) shown = Math.max(shown, target);
      const p = Math.min(1, shown);
      fill.style.setProperty("--p", (p * 100).toFixed(1) + "%");
      bar.style.transform = `scaleX(${p})`;
      count.textContent = String(Math.round(p * 100)).padStart(3, "0");
      if (p > 0.995 && (done === total || forced)) {
        count.textContent = "100";
        try { sessionStorage.setItem("pizno-seen", "1"); } catch (e) {}
        resolve(true);
        return;
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
    .to(".loader-word, .loader-row", { yPercent: -40, opacity: 0, duration: .6, ease: "power3.in", stagger: .04 })
    .to(loader, { yPercent: -100, duration: 1, ease: "expo.inOut" }, "-=.2")
    .add(heroIntro, "-=.55")
    .set(loader, { display: "none" });
}

function heroIntro() {
  const chars = $$("#heroTitle .ch");
  if (!hasGsap || reduce) { chars.forEach(c => c.style.transform = "none"); return; }
  gsap.fromTo(chars, { y: 0, yPercent: 105 }, { y: 0, yPercent: 0, duration: 1.2, ease: "expo.out", stagger: .045 });
  gsap.from(".hero-phones .phone", { y: 160, opacity: 0, rotate: 0, duration: 1.4, ease: "expo.out", stagger: .1, delay: .25 });
  gsap.from(".hero-meta, .hero-bottom", { opacity: 0, y: 24, duration: 1, ease: "expo.out", delay: .6, stagger: .1 });
}

/* ---------- reveals (fire once) ---------- */
const io = new IntersectionObserver(entries => entries.forEach(en => {
  if (!en.isIntersecting) return;
  en.target.classList.add("in");
  $$("[data-count]", en.target).forEach(countUp);
  io.unobserve(en.target);
}), { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });
$$(".reveal, .split, .hero-stats").forEach(el => io.observe(el));

function countUp(el) {
  const to = +el.dataset.count;
  if (reduce || !hasGsap) { el.textContent = to; return; }
  const o = { v: 0 };
  gsap.to(o, { v: to, duration: 1.6, ease: "expo.out", onUpdate: () => el.textContent = Math.round(o.v) });
}

/* ---------- videos: lazy, play in view, click for sound ---------- */
const vio = new IntersectionObserver(entries => entries.forEach(en => {
  const v = en.target;
  if (en.isIntersecting) {
    if (!v.src) v.src = v.dataset.src;
    if (!document.body.classList.contains("is-loading")) v.play().catch(() => {});
  } else v.pause();
}), { threshold: 0.25, rootMargin: "120px 0px" });
$$("video[data-src]").forEach(v => vio.observe(v));

$$(".phone[data-cursor]").forEach(ph => ph.addEventListener("click", () => {
  const v = $("video", ph); if (!v) return;
  const turnOn = v.muted;
  $$(".phone[data-cursor]").forEach(o => { const ov = $("video", o); if (ov) ov.muted = true; o.dataset.sound = t("soundOff"); });
  if (turnOn) { v.muted = false; v.play().catch(() => {}); ph.dataset.sound = t("soundOn"); }
  setCursorLabel(ph);
}));

/* ---------- cursor ---------- */
const cursor = $("#cursor"), cursorLabel = $("#cursorLabel");
function setCursorLabel(el) {
  const v = el && $("video", el);
  cursorLabel.textContent = v ? (v.muted ? t("sound") + " +" : t("sound") + " −") : "";
}
if (fine && !reduce) {
  let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;
  addEventListener("mousemove", e => { x = e.clientX; y = e.clientY; });
  (function loop() {
    cx += (x - cx) * 0.18; cy += (y - cy) * 0.18;
    cursor.style.transform = `translate(${cx}px, ${cy}px)`;
    requestAnimationFrame(loop);
  })();
  $$("[data-cursor]").forEach(el => {
    el.addEventListener("mouseenter", () => { cursor.classList.add("big"); setCursorLabel(el); });
    el.addEventListener("mouseleave", () => cursor.classList.remove("big"));
  });
  $$("a, button").forEach(el => {
    el.addEventListener("mouseenter", () => cursor.style.background = "#F2ECE2");
    el.addEventListener("mouseleave", () => cursor.style.background = "");
  });

  // magnetic buttons
  $$(".magnetic").forEach(b => {
    b.addEventListener("mousemove", e => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
    });
    b.addEventListener("mouseleave", () => { b.style.transition = "transform .6s cubic-bezier(.16,1,.3,1)"; b.style.transform = ""; setTimeout(() => b.style.transition = "", 600); });
  });
}

/* ---------- scroll progress + HUD ---------- */
const progress = $("#progress");
function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();

const hudNum = $("#hudNum"), hudName = $("#hudName");
const hio = new IntersectionObserver(entries => entries.forEach(en => {
  if (!en.isIntersecting) return;
  const [n, k] = en.target.dataset.hud.split("|");
  hudKey = k;
  hudNum.textContent = n; hudName.textContent = t(k);
}), { rootMargin: "-50% 0px -50% 0px" });
$$("[data-hud]").forEach(s => hio.observe(s));

// nav and HUD switch to light text over dark / red sections
const isDark = el => el.classList.contains("dark") || el.classList.contains("red");
const nav = $(".nav"), hud = $(".hud");
const themed = $$("main > section, .marquee");
const watchEdge = (target, margin) => new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) target.classList.toggle("on-dark", isDark(en.target));
}), { rootMargin: margin });
const navIO = watchEdge(nav, "0px 0px -96% 0px"), hudIO = watchEdge(hud, "-96% 0px 0px 0px");
themed.forEach(s => { navIO.observe(s); hudIO.observe(s); });

/* ---------- GSAP scenes ---------- */
if (hasGsap && !reduce) {
  gsap.registerPlugin(ScrollTrigger);

  // marquee: endless, speeds up with scroll velocity
  const mq = gsap.to("#marquee", { xPercent: -50, duration: 28, ease: "none", repeat: -1 });
  if (lenis) lenis.on("scroll", ({ velocity }) => {
    gsap.to(mq, { timeScale: 1 + Math.min(Math.abs(velocity) * 0.25, 6), duration: .3, overwrite: true });
    gsap.to(mq, { timeScale: 1, duration: 1.2, delay: .3 });
  });

  // hero: title drifts apart, phones rise
  gsap.to("#heroTitle", { yPercent: 18, scale: 1.06, opacity: .35, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  gsap.to(".hero-phones .p1", { y: -120, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  gsap.to(".hero-phones .p2", { y: -220, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  gsap.to(".hero-phones .p3", { y: -80, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

  // principle: statement lights up word by word
  gsap.to(".statement .w", { opacity: 1, stagger: .12, ease: "none", scrollTrigger: { trigger: ".statement", start: "top 78%", end: "bottom 35%", scrub: true } });

  // nfc background lines slide in opposite directions
  $$(".nfc-line").forEach(l => gsap.fromTo(l, { xPercent: l.dataset.dir > 0 ? -25 : 0 }, { xPercent: l.dataset.dir > 0 ? 0 : -25, ease: "none", scrollTrigger: { trigger: ".nfc", start: "top bottom", end: "bottom top", scrub: true } }));

  // bots clock drift
  gsap.fromTo(".clock", { xPercent: 10 }, { xPercent: -10, ease: "none", scrollTrigger: { trigger: ".bots", start: "top bottom", end: "bottom top", scrub: true } });

  // process line draws
  gsap.to("#psLine", { scaleX: 1, ease: "none", scrollTrigger: { trigger: ".process", start: "top 70%", end: "bottom 70%", scrub: true } });

  // work: horizontal reel on desktop
  const mm = gsap.matchMedia();
  mm.add("(min-width: 901px)", () => {
    const track = $("#workTrack");
    const dist = () => Math.max(0, track.scrollWidth - innerWidth);
    gsap.to(track, { x: () => -dist(), ease: "none", scrollTrigger: { trigger: "#work", start: "top top", end: () => "+=" + dist(), pin: ".work-pin", scrub: 1, invalidateOnRefresh: true, anticipatePin: 1 } });
    gsap.fromTo(".work-bg", { xPercent: 0 }, { xPercent: -35, ease: "none", scrollTrigger: { trigger: "#work", start: "top top", end: () => "+=" + dist(), scrub: 1, invalidateOnRefresh: true } });
  });

  addEventListener("load", () => ScrollTrigger.refresh());
} else {
  const line = $("#psLine"); if (line) line.style.transform = "scaleX(1)";
}

/* ---------- start ---------- */
runLoader().then(animated => {
  leaveLoader(animated);
  $$("video[data-hero]").forEach(v => { if (!v.src) v.src = v.dataset.src; v.play().catch(() => {}); });
});
