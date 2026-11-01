// Vercel serverless function: receives the lead form and forwards it to Telegram.
// Set two Environment Variables in the Vercel project (Settings → Environment Variables):
//   TELEGRAM_BOT_TOKEN — the token @BotFather gives for your bot
//   TELEGRAM_CHAT_ID   — your own Telegram user id (the bot sends leads there)
// The token lives only on the server; it is never sent to the browser.

const clean = (v, max) => String(v ?? "").replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max);

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method_not_allowed" });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return res.status(503).json({ ok: false, error: "not_configured" });

  let body = req.body || {};
  if (typeof body === "string") { try { body = JSON.parse(body); } catch { body = {}; } }

  // honeypot: real people never fill the hidden "website" field
  if (body.website) return res.status(200).json({ ok: true });

  const name = clean(body.name, 80);
  const instagram = clean(body.instagram, 80);
  const sport = clean(body.sport, 40);
  const city = clean(body.city, 60);
  const contact = clean(body.contact, 80);
  const goal = String(body.goal ?? "").trim().slice(0, 500);
  if (!name || !instagram || !contact) return res.status(400).json({ ok: false, error: "missing_fields" });

  const handle = instagram.replace(/^@/, "").replace(/^https?:\/\/(www\.)?instagram\.com\//i, "").split(/[/?#\s]/)[0];
  const text = [
    "🔥 Нова заявка на розбір Instagram",
    "",
    `Ім’я: ${name}`,
    `Instagram: @${handle} — https://instagram.com/${handle}`,
    `Спорт: ${sport || "—"}`,
    `Місто: ${city || "—"}`,
    `Зв’язок: ${contact}`,
    goal ? `Мета: ${goal}` : null,
  ].filter(v => v !== null).join("\n");

  try {
    const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
    });
    if (!r.ok) return res.status(502).json({ ok: false, error: "telegram_failed" });
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ ok: false, error: "telegram_unreachable" });
  }
};
