import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    const token = process.env.TELEGRAM_BOT_TOKEN || "236057822:AAHuBZEQyEOMACpWSXNwvYH1Z22ZjH-d4gg"
    const chatId = process.env.TELEGRAM_CHAT_ID || "-1001132006290"

    if (!token || !chatId) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Сервис временно недоступен. Если проблема повторяется, напишите на hello@linguatrip.com.",
        },
        { status: 500 },
      )
    }

    const text = [
      "Новая заявка с лендинга Black friday",
      `Имя: ${name || "-"}`,
      `Email: ${email || "-"}`,
      `Телефон: ${phone || "-"}`,
      `Сообщение: ${message || "-"}`,
    ].join("\n")

    const tgResp = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    })

    const tgData = await tgResp.json().catch(() => null)
    if (!tgResp.ok || (tgData && tgData.ok === false)) {
      const description = tgData?.description || "Ошибка отправки"
      return NextResponse.json(
        {
          ok: false,
          error: `${description}. Если проблема повторяется, напишите на hello@linguatrip.com.`,
        },
        { status: 500 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error: "Ошибка сервера. Если проблема повторяется, напишите на hello@linguatrip.com.",
      },
      { status: 400 },
    )
  }
}