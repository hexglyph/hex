import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import Solucoes from "@/components/solucoes"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-accent/10 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full flex-row items-center justify-center">
        <Navbar />
        <Hero />
        <Features />
        <Solucoes />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

