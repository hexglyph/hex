// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Resend } from "resend"
import { EmailTemplate } from "./email-template"
import type { ReactElement } from "react"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json()
    const data = await resend.emails.send({
      from: "HEXGLYPH <onboarding@resend.dev>",
      to: ["me@danielniebraz.dev"],
      subject: "Nova mensagem de contato - HEXGLYPH",
      react: EmailTemplate({ name, email, phone, message }) as ReactElement,
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}

