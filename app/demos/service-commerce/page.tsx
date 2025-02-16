"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, ShoppingCart, Coffee, Utensils, Gift } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import NavbarDemo from "@/components/navbar-demo"

const products = [
  { id: 1, name: "Café Especial", price: 25.9, image: "/placeholder.svg?height=200&width=200", icon: Coffee },
  { id: 2, name: "Sanduíche Gourmet", price: 18.5, image: "/placeholder.svg?height=200&width=200", icon: Utensils },
  { id: 3, name: "Kit Presente", price: 89.9, image: "/placeholder.svg?height=200&width=200", icon: Gift },
]

export default function ServiceCommerceDemo() {
  const [cart, setCart] = useState<{ id: number; name: string; price: number; quantity: number }[]>([])

  const addToCart = (product: { id: number; name: string; price: number }) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <NavbarDemo />

      <main className="flex min-h-[calc(100vh-3.5rem)] w-full flex-col items-center justify-center space-y-8 py-8 text-center px-8">
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-center mb-4">Bem-vindo ao HEXGLYPH Café</h1>
          <p className="text-center text-gray-400 max-w-2xl mx-auto">
            Desfrute de uma experiência única com nossos cafés especiais e deliciosos produtos artesanais.
          </p>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="relative">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Carrinho
                {totalItems > 0 && (
                  <Badge variant="destructive" className="absolute -top-2 -right-2">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Seu Carrinho</SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        {item.quantity} x R$ {item.price.toFixed(2)}
                      </p>
                    </div>
                    <Button variant="destructive" size="sm" onClick={() => removeFromCart(item.id)}>
                      Remover
                    </Button>
                  </div>
                ))}
                {cart.length === 0 && <p className="text-gray-500">Seu carrinho está vazio.</p>}
                {cart.length > 0 && (
                  <div className="border-t pt-4 mt-4">
                    <p className="font-bold">Total: R$ {totalPrice.toFixed(2)}</p>
                    <Button className="w-full mt-4">Finalizar Compra</Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
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
                  <Button className="w-full" onClick={() => addToCart(product)}>
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
      </main>
    </div>
  )
}