import { Code, Smartphone, Server, LifeBuoy, Zap, Shield } from "lucide-react"

const features = [
  {
    name: "Aplicações Web Personalizadas",
    description:
      "Desenvolvemos aplicações web sob medida para atender às necessidades específicas do seu negócio. Utilizamos as mais recentes tecnologias para criar soluções eficientes e escaláveis.",
    icon: Code,
  },
  {
    name: "Design Responsivo",
    description:
      "Criamos interfaces intuitivas e responsivas que funcionam perfeitamente em todos os dispositivos. Nosso foco é proporcionar uma experiência de usuário excepcional em desktop, tablet e mobile.",
    icon: Smartphone,
  },
  {
    name: "Sistemas Web Robustos",
    description:
      "Construímos sistemas web escaláveis e seguros para otimizar seus processos internos. Desde ERPs até plataformas de e-commerce, temos experiência em diversos tipos de sistemas.",
    icon: Server,
  },
  {
    name: "Manutenção e Suporte",
    description:
      "Oferecemos suporte contínuo e manutenção para garantir que sua solução web esteja sempre atualizada e funcionando perfeitamente. Nossa equipe está sempre disponível para resolver qualquer problema.",
    icon: LifeBuoy,
  },
  {
    name: "Otimização de Desempenho",
    description:
      "Implementamos técnicas avançadas de otimização para garantir que seus sites e aplicações carreguem rapidamente e ofereçam uma experiência fluida aos usuários.",
    icon: Zap,
  },
  {
    name: "Segurança e Conformidade",
    description:
      "Priorizamos a segurança em todos os nossos projetos, implementando as melhores práticas e mantendo conformidade com regulamentações como LGPD e GDPR.",
    icon: Shield,
  },
]

export default function Features() {
  return (
    <section id="servicos" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-primary">Nossos Serviços</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Descubra como a HEXGLYPH pode transformar sua presença digital com nossas soluções personalizadas.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4 mb-4">
              <feature.icon className="h-8 w-8 text-primary" />
              <h3 className="font-bold text-primary">{feature.name}</h3>
            </div>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

