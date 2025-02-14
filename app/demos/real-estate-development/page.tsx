"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { ArrowLeft, Home, Building, Hammer, PaintBucket, Truck, Check } from "lucide-react"
import Image from "next/image"

const constructionStages = [
  {
    id: 1,
    name: "Fundação",
    icon: Building,
    description: "Escavação e preparação do terreno, construção das fundações.",
  },
  { id: 2, name: "Estrutura", icon: Hammer, description: "Construção da estrutura principal do edifício." },
  {
    id: 3,
    name: "Acabamento Externo",
    icon: PaintBucket,
    description: "Instalação de janelas, portas e acabamento da fachada.",
  },
  {
    id: 4,
    name: "Acabamento Interno",
    icon: Home,
    description: "Instalações elétricas, hidráulicas e acabamentos internos.",
  },
  { id: 5, name: "Entrega", icon: Truck, description: "Limpeza final, inspeções e preparação para entrega." },
]

const currentStage = 3 // Assuming the project is currently at stage 3

export default function RealEstateDevelopmentDemo() {
  const [selectedStage, setSelectedStage] = useState(currentStage)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="bg-gray-900 text-white border-b border-gray-700">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/" className="font-bold flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            HEXGLYPH Residencial
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="#sobre" className="hover:underline">
              Sobre
            </Link>
            <Link href="#andamento" className="hover:underline">
              Andamento
            </Link>
            <Link href="#contato" className="hover:underline">
              Contato
            </Link>
          </nav>
        </div>
      </header>

      <main className="container py-8">
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-center mb-4">HEXGLYPH Residencial</h1>
          <p className="text-center text-gray-400 max-w-2xl mx-auto">
            Um empreendimento moderno e sofisticado no coração da cidade.
          </p>
        </section>

        <section id="sobre" className="mb-16">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle>Sobre o Empreendimento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="mb-4">
                    O HEXGLYPH Residencial é um projeto inovador que combina conforto, tecnologia e sustentabilidade.
                    Com 20 andares e 80 apartamentos, oferecemos opções de 2 a 4 dormitórios para atender às
                    necessidades de diferentes famílias.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Localização privilegiada</li>
                    <li>Áreas de lazer completas</li>
                    <li>Tecnologia smart home em todos os apartamentos</li>
                    <li>Certificação de sustentabilidade</li>
                  </ul>
                </div>
                <div className="relative h-64 md:h-full">
                  <Image
                    src="/placeholder.svg"
                    alt="HEXGLYPH Residencial"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="andamento" className="mb-16">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle>Andamento da Obra</CardTitle>
              <CardDescription>Acompanhe o progresso da construção do HEXGLYPH Residencial</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Progresso Geral</h3>
                <Progress value={(currentStage / constructionStages.length) * 100} className="w-full bg-gray-700" />
                <p className="text-sm text-gray-400 mt-2">Estágio atual: {constructionStages[currentStage - 1].name}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {constructionStages.map((stage) => (
                  <Card
                    key={stage.id}
                    className={`bg-gray-800 border-gray-700 text-white cursor-pointer transition-colors ${selectedStage === stage.id ? "border-primary" : ""}`}
                    onClick={() => setSelectedStage(stage.id)}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <stage.icon className="mr-2 h-5 w-5" />
                        {stage.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{stage.description}</p>
                    </CardContent>
                    <CardFooter>
                      {stage.id <= currentStage ? (
                        <span className="text-green-600 flex items-center">
                          <Check className="mr-1 h-4 w-4" />
                          {stage.id === currentStage ? "Em andamento" : "Concluído"}
                        </span>
                      ) : (
                        <span className="text-gray-400">Aguardando</span>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="contato">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle>Entre em Contato</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Interessado em saber mais sobre o HEXGLYPH Residencial? Entre em contato conosco:</p>
              <ul className="mt-4 space-y-2">
                <li>Email: contato@hexglyphresidencial.com</li>
                <li>Telefone: (11) 1234-5678</li>
                <li>Endereço do Stand de Vendas: Av. da Inovação, 1000 - São Paulo, SP</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button>Agende uma Visita</Button>
            </CardFooter>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-900 text-white border-t border-gray-700 py-8">
        <div className="container text-center">
          <p>&copy; 2023 HEXGLYPH Residencial. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

