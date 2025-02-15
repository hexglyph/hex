// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { generateEmailHtml } from "./email-template"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json()

    const data = await resend.emails.send({
      from: "HEXGLYPH <onboarding@resend.dev>",
      to: ["me@danielniebraz.dev"],
      subject: "Nova mensagem de contato - HEXGLYPH",
      html: generateEmailHtml({ name, email, phone, message }),
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}



