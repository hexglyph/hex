"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ProductGrid } from "./components/product-grid"
import { CartDrawer } from "./components/cart-drawer"

export default function EcommerceDemo() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<any[]>([])

  const addToCart = (product: any) => {
    setCartItems((prev) => [...prev, product])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="border-b border-gray-700 bg-gray-900 sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/" className="text-blue-600 font-bold">
            HEXGLYPH Store
          </Link>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline">
              <Link href="/#portfolio">Voltar ao Portfolio</Link>
            </Button>
            <Button variant="outline" onClick={() => setCartOpen(true)} className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItems.length > 0 && <Badge className="absolute -top-2 -right-2">{cartItems.length}</Badge>}
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Produtos em Destaque</h2>
            <ProductGrid onAddToCart={addToCart} />
          </div>
        </div>
      </main>

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemoveItem={(index) => {
          setCartItems((prev) => prev.filter((_, i) => i !== index))
        }}
      />
    </div>
  )
}

