import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const solutions = [
  {
    title: "Dashboard Financeiro",
    description:
      "Painel de controle financeiro completo com visualização de contas, transações recentes e acompanhamento de metas. Interface moderna e intuitiva para gestão financeira pessoal e empresarial.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RGdUt8tdjNXrJewTKNeiYDJyrqfwqM.png",
    demoLink: "/demos/dashboard",
    features: [
      "Visão geral de contas e saldos",
      "Acompanhamento de transações em tempo real",
      "Gestão de metas financeiras",
      "Relatórios detalhados",
    ],
  },
  {
    title: "Plataforma E-commerce",
    description:
      "Solução completa de comércio eletrônico com recursos avançados de personalização, recomendação de produtos e gestão de estoque integrada.",
    image: "/placeholder.svg?height=300&width=400",
    demoLink: "/demos/ecommerce",
    features: [
      "Catálogo de produtos dinâmico",
      "Sistema de recomendação inteligente",
      "Gestão de estoque em tempo real",
      "Processamento seguro de pagamentos",
    ],
  },
  {
    title: "Sistema de Gestão de Tarefas",
    description:
      "Aplicativo web responsivo para gerenciamento de projetos e tarefas com recursos avançados de colaboração e acompanhamento de progresso.",
    image: "/placeholder.svg?height=300&width=400",
    demoLink: "/demos/task-management",
    features: [
      "Organização de tarefas por projeto",
      "Colaboração em tempo real",
      "Calendário integrado",
      "Sistema de notificações",
    ],
  },
  {
    title: "Assistente Virtual IA",
    description:
      "Assistente virtual alimentado por inteligência artificial, capaz de responder perguntas, realizar tarefas e fornecer suporte personalizado aos usuários.",
    image: "/placeholder.svg?height=300&width=400",
    demoLink: "/demos/ai-assistant",
    features: [
      "Processamento de linguagem natural",
      "Aprendizado contínuo",
      "Integração com sistemas existentes",
      "Personalização baseada no perfil do usuário",
    ],
  },
  {
    title: "Site de Serviço/Comércio",
    description:
      "Plataforma web para negócios locais, como cafeterias, restaurantes ou lojas, oferecendo uma presença online atraente e funcional.",
    image: "/placeholder.svg?height=300&width=400",
    demoLink: "/demos/service-commerce",
    features: [
      "Design responsivo e atraente",
      "Cardápio/catálogo de produtos online",
      "Integração com sistemas de pedidos",
      "Informações de contato e localização",
    ],
  },
  {
    title: "Empreendimento Imobiliário",
    description:
      "Plataforma para apresentação e acompanhamento de projetos imobiliários, como a construção de um prédio de apartamentos, oferecendo informações detalhadas e atualizações em tempo real.",
    image: "/placeholder.svg?height=300&width=400",
    demoLink: "/demos/real-estate-development",
    features: [
      "Apresentação detalhada do empreendimento",
      "Acompanhamento do estágio atual da construção",
      "Informações sobre as etapas da construção",
      "Área de contato para interessados",
    ],
  },
  {
    title: "Sistema POS para Restaurantes",
    description:
      "Sistema completo de ponto de venda para restaurantes com gerenciamento de pedidos, menu digital e integração com a cozinha.",
    image: "/placeholder.svg?height=300&width=400",
    demoLink: "/demos/restaurant-pos",
    features: [
      "Interface intuitiva para garçons",
      "Gerenciamento de pedidos em tempo real",
      "Integração com a cozinha",
      "Múltiplas formas de pagamento",
    ],
  },
]

export default function Solucoes() {
  return (
    <section id="solucoes" className="container py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center mb-16">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-primary">Nossas Soluções</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Explore algumas das soluções inovadoras que desenvolvemos.
        </p>
      </div>
      <div className="space-y-20">
        {solutions.map((solution, index) => (
          <div key={index} className={`flex flex-col gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold text-primary">{solution.title}</h3>
              <p className="text-muted-foreground">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-4">
                <a href={solution.demoLink} className="inline-flex items-center">
                  Ver Demonstração
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="flex-1 overflow-hidden rounded-lg border bg-background p-2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-md">
                <Image
                  src={solution.image || "/placeholder.svg"}
                  alt={solution.title}
                  width={800}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

