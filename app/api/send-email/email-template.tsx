import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from "@react-email/components"
import type * as React from "react"

interface EmailTemplateProps {
  name: string
  email: string
  phone?: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, phone, message }) => (
  <Html>
    <Head />
    <Preview>Nova mensagem de contato do site HEXGLYPH</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Nova mensagem de contato</Heading>
        <Text style={text}>Você recebeu uma nova mensagem de contato do site HEXGLYPH:</Text>
        <Section style={section}>
          <Text style={sectionItem}>
            <strong>Nome:</strong> {name}
          </Text>
          <Text style={sectionItem}>
            <strong>Email:</strong> {email}
          </Text>
          {phone && (
            <Text style={sectionItem}>
              <strong>Celular:</strong> {phone}
            </Text>
          )}
          <Text style={sectionItem}>
            <strong>Mensagem:</strong> {message}
          </Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>Esta é uma mensagem automática, por favor não responda diretamente a este email.</Text>
      </Container>
    </Body>
  </Html>
)

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "560px",
}

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
  textAlign: "center" as const,
}

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
}

const section = {
  padding: "24px",
  backgroundColor: "#fff",
  borderRadius: "4px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
}

const sectionItem = {
  margin: "0 0 8px",
}

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
}

