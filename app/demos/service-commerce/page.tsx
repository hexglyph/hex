import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, ShoppingCart, Coffee, Utensils, Gift } from "lucide-react"
import Image from "next/image"

const products = [
  { id: 1, name: "Café Especial", price: 25.9, image: "/placeholder.svg?height=200&width=200", icon: Coffee },
  { id: 2, name: "Sanduíche Gourmet", price: 18.5, image: "/placeholder.svg?height=200&width=200", icon: Utensils },
  { id: 3, name: "Kit Presente", price: 89.9, image: "/placeholder.svg?height=200&width=200", icon: Gift },
]

export default function ServiceCommerceDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="bg-gray-900 text-white border-b border-gray-700">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/" className="font-bold flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            HEXGLYPH Café
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="#menu" className="hover:underline">
              Menu
            </Link>
            <Link href="#sobre" className="hover:underline">
              Sobre
            </Link>
            <Link href="#contato" className="hover:underline">
              Contato
            </Link>
            <Button variant="secondary" size="sm">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Carrinho (0)
            </Button>
          </nav>
        </div>
      </header>

      <main className="container py-8">
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-center mb-4">Bem-vindo ao HEXGLYPH Café</h1>
          <p className="text-center text-gray-400 max-w-2xl mx-auto">
            Desfrute de uma experiência única com nossos cafés especiais e deliciosos produtos artesanais.
          </p>
        </section>

        <section id="menu" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Nosso Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="bg-gray-800 border-gray-700 text-white">
                <CardHeader>
                  <div className="w-full h-48 relative mb-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <CardTitle className="flex items-center">
                    <product.icon className="mr-2 h-5 w-5 text-primary" />
                    {product.name}
                  </CardTitle>
                  <CardDescription>R$ {product.price.toFixed(2)}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Adicionar ao Carrinho
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="sobre" className="mb-16">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle>Sobre Nós</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                O HEXGLYPH Café é mais do que uma simples cafeteria. Somos apaixonados por oferecer a melhor experiência
                em café, com grãos cuidadosamente selecionados e torrados para realçar seus sabores únicos. Nossa missão
                é criar um espaço acolhedor onde a comunidade possa se reunir, trabalhar e desfrutar de momentos
                especiais.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="contato">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle>Entre em Contato</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Estamos sempre felizes em ouvir você! Entre em contato conosco:</p>
              <ul className="mt-4 space-y-2">
                <li>Email: contato@hexglyphcafe.com</li>
                <li>Telefone: (11) 1234-5678</li>
                <li>Endereço: Rua da Inovação, 123 - São Paulo, SP</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button>Enviar Mensagem</Button>
            </CardFooter>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-900 text-white border-t border-gray-700 py-8">
        <div className="container text-center">
          <p>&copy; 2023 HEXGLYPH Café. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

