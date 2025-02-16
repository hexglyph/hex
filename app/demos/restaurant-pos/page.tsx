"use client"

import { useState } from "react"
import { MenuCategories } from "./components/menu-categories"
import { MenuItems } from "./components/menu-items"
import { OrderPanel } from "./components/order-panel"
import { KitchenOrders } from "./components/kitchen-orders"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import NavbarDemo from "@/components/navbar-demo"

export type MenuItem = {
  id: string
  name: string
  price: number
  category: string
  isVeg: boolean
  image: string
}

export type OrderItem = MenuItem & {
  quantity: number
}

export type KitchenOrder = {
  id: string
  tableNumber: string
  items: OrderItem[]
  status: "pendente" | "preparando" | "pronto"
}

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Salada de Legumes Saudável",
    price: 17.99,
    category: "Pratos Principais",
    isVeg: true,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "2",
    name: "Hambúrguer de Carne com Batatas",
    price: 23.99,
    category: "Hambúrgueres",
    isVeg: false,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "3",
    name: "Tacos de Frango Grelhado",
    price: 14.99,
    category: "Pratos Principais",
    isVeg: false,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "4",
    name: "Suco de Laranja com Sementes de Manjericão",
    price: 12.99,
    category: "Café da Manhã",
    isVeg: true,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "5",
    name: "Sushi de Atum com Camarão",
    price: 9.99,
    category: "Pratos Principais",
    isVeg: false,
    image: "/placeholder.svg?height=100&width=100",
  },
]

const categories = [
  { id: "all", name: "Todos", itemCount: 235 },
  { id: "breakfast", name: "Café da Manhã", itemCount: 19 },
  { id: "soups", name: "Sopas", itemCount: 8 },
  { id: "pasta", name: "Massas", itemCount: 14 },
  { id: "main-course", name: "Pratos Principais", itemCount: 27 },
  { id: "burges", name: "Hambúrgueres", itemCount: 13 },
]

export default function RestaurantPOS() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [orderItems, setOrderItems] = useState<OrderItem[]>([])
  const [kitchenOrders, setKitchenOrders] = useState<KitchenOrder[]>([])
  const [tableNumber, setTableNumber] = useState("4")
  const [customerName, setCustomerName] = useState("João Silva")

  const addToOrder = (item: MenuItem) => {
    setOrderItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeFromOrder = (itemId: string) => {
    setOrderItems((prev) => {
      const existing = prev.find((i) => i.id === itemId)
      if (existing && existing.quantity > 1) {
        return prev.map((i) => (i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i))
      }
      return prev.filter((i) => i.id !== itemId)
    })
  }

  const placeOrder = () => {
    if (orderItems.length === 0) return

    const newOrder: KitchenOrder = {
      id: Math.random().toString(),
      tableNumber,
      items: orderItems,
      status: "pendente",
    }

    setKitchenOrders((prev) => [...prev, newOrder])
    setOrderItems([])
  }

  return (
    <div className="min-h-screen bg-background">
      <NavbarDemo />

      <main className="flex min-h-[calc(100vh-3.5rem)] w-full flex-col items-center justify-center space-y-8 py-24 text-center md:py-32 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
          <div className="space-y-6">
            <MenuCategories categories={categories} selected={selectedCategory} onSelect={setSelectedCategory} />
            <MenuItems items={menuItems} onAddItem={addToOrder} selectedCategory={selectedCategory} />
          </div>
          <OrderPanel
            items={orderItems}
            onIncrement={addToOrder}
            onDecrement={removeFromOrder}
            tableNumber={tableNumber}
            customerName={customerName}
            onPlaceOrder={placeOrder}
          />
        </div>
        <div className="mt-6">
          <KitchenOrders orders={kitchenOrders} onUpdateStatus={setKitchenOrders} />
        </div>
      </main>
    </div>
  )
}

