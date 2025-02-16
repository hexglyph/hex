import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="flex min-h-[calc(100vh-3.5rem)] w-full flex-col items-center justify-center space-y-8 py-24 text-center md:py-32 px-8">
      <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-white">
        Pronto para impulsionar seu negócio digital?
      </h2>
      <p className="max-w-[42rem] leading-normal text-white/90 sm:text-xl sm:leading-8">
        Entre em contato conosco hoje mesmo e descubra como a HEXGLYPH pode transformar sua presença online com
        soluções web personalizadas e inovadoras.
      </p>
      <Button asChild size="lg" className="mt-4 bg-primary text-black hover:bg-primary/90">
        <Link href="/contato">Solicite um Orçamento Gratuito</Link>
      </Button>
    </section>
  )
}

