export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body: any = await request.json().catch(() => ({}));
    const email = (body?.email || "").toString().trim();
    const phone = (body?.phone || "").toString().trim();
    const page = (body?.page || "").toString().trim();

    if (!email && !phone) {
      return json({ ok: false, error: "email or phone required" }, 400);
    }

    const webhook = process.env.SLACK_WEBHOOK_URL;
    if (!webhook) {
      return json({ ok: false, error: "SLACK_WEBHOOK_URL is not configured" }, 500);
    }

    const site =
      request.headers.get("x-forwarded-host") ||
      request.headers.get("host") ||
      "unknown";

    const text = [
      "🎉 *New subscription*",
      `• *Site:* ${site}`,
      `• *Email:* ${email || "—"}`,
      `• *Phone:* ${phone || "—"}`,
      page ? `• *Page:* ${page}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const slackRes = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    if (!slackRes.ok) {
      return json({ ok: false, error: "slack request failed" }, 502);
    }

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: "server error" }, 500);
  }
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
