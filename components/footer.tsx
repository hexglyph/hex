import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t bg-black text-white">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-xFXmQVJi5hTE7FIxh1klY7ogWx8Cry.png"
              alt="HEXGLYPH Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <div>
              <h2 className="font-bold text-primary">HEXGLYPH</h2>
              <p className="text-sm text-gray-400">Soluções web inovadoras para o seu negócio.</p>
            </div>
          </div>
          <nav className="flex space-x-4 mb-4 md:mb-0">
            <a href="#servicos" className="text-sm text-gray-400 hover:text-primary/90">
              Serviços
            </a>
            <a href="#solucoes" className="text-sm text-gray-400 hover:text-primary/90">
              Soluções
            </a>
            <a href="#sobre" className="text-sm text-gray-400 hover:text-primary/90">
              Sobre Nós
            </a>
            <Link href="/contato" className="text-sm text-gray-400 hover:text-primary/90">
              Contato
            </Link>
          </nav>
          <div className="flex space-x-4">
            <Link href="https://github.com/hexglyph" className="text-gray-400 hover:text-primary/90">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://twitter.com/hexglyph" className="text-gray-400 hover:text-primary/90">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://linkedin.com/company/hexglyph" className="text-gray-400 hover:text-primary/90">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} HEXGLYPH. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

