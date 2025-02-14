import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Notebook Pro X",
    price: 4999.9,
    description: "Notebook de última geração com processador de alta performance",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Smartphone Ultra",
    price: 2999.9,
    description: "Smartphone com câmera profissional e bateria de longa duração",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Tablet Plus",
    price: 1999.9,
    description: "Tablet ideal para trabalho e entretenimento",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Smartwatch Elite",
    price: 899.9,
    description: "Relógio inteligente com monitor cardíaco e GPS",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export function ProductGrid({ onAddToCart }: { onAddToCart: (product: any) => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id}>
          <CardHeader>
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={200}
              height={200}
              className="rounded-lg object-cover mx-auto"
            />
            <CardTitle className="mt-4">{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{product.description}</p>
            <p className="text-2xl font-bold mt-4">
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={() => onAddToCart(product)}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Adicionar ao Carrinho
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

