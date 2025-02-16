"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Send } from "lucide-react"
import NavbarDemo from "@/components/navbar-demo"

export default function AIAssistantDemo() {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    { role: "assistant", content: "Olá! Eu sou o assistente virtual da HEXGLYPH. Como posso ajudar você hoje?" },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { role: "user", content: input }])
      // Simular resposta do assistente
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `Entendi sua pergunta sobre "${input}". Como assistente virtual, estou aqui para ajudar com informações sobre os serviços da HEXGLYPH, agendar demonstrações ou conectar você com nossa equipe de vendas. Como posso auxiliar mais especificamente?`,
          },
        ])
      }, 1000)
      setInput("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <NavbarDemo />

      <main className="flex min-h-[calc(100vh-3.5rem)] w-full flex-col items-center justify-center space-y-8 py-24 text-center md:py-32 px-8">
        <Card className="max-w-2xl mx-auto bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle>Assistente Virtual IA</CardTitle>
            <CardDescription>Experimente nosso assistente virtual alimentado por IA</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`rounded-lg p-2 max-w-[80%] ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <div className="flex w-full items-center space-x-2">
              <Input
                type="text"
                placeholder="Digite sua mensagem..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
              />
              <Button onClick={handleSend}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

