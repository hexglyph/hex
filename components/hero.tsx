import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-primary via-primary to-accent bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Transforme sua visão em
          <br />
          realidade digital
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          A HEXGLYPH é especializada em criar aplicações web, sites e sistemas web personalizados que impulsionam o seu
          negócio. Do conceito ao código, nós entregamos excelência.
        </p>
      </div>
      <div className="flex gap-4">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link href="/contato">Solicitar um Orçamento Gratuito</Link>
        </Button>
        <Button variant="outline" size="lg" className="text-primary border-primary hover:bg-primary/10">
          <Link href="#solucoes">Ver Soluções</Link>
        </Button>
      </div>
    </section>
  )
}

