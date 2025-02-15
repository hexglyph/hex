export function generateEmailHtml({
  name,
  email,
  phone,
  message,
}: {
  name: string
  email: string
  phone?: string
  message: string
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Nova mensagem de contato - HEXGLYPH</title>
      </head>
      <body style="font-family: sans-serif; line-height: 1.5; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333; font-size: 24px;">Nova mensagem de contato</h1>
          <p>Você recebeu uma nova mensagem de contato do site HEXGLYPH:</p>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 4px; margin: 20px 0;">
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Celular:</strong> ${phone}</p>` : ""}
            <p><strong>Mensagem:</strong> ${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 14px;">Esta é uma mensagem automática, por favor não responda diretamente a este email.</p>
        </div>
      </body>
    </html>
  `
}

