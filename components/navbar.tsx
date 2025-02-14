import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-xFXmQVJi5hTE7FIxh1klY7ogWx8Cry.png"
            alt="HEXGLYPH Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="font-bold text-primary">HEXGLYPH</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <a href="#solucoes" className="transition-colors hover:text-primary">
            Soluções
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/hexglyph" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Button asChild variant="ghost" size="sm">
            <Link href="/contato">Contato</Link>
          </Button>
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
            <Link href="/contato">Solicitar Orçamento</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

