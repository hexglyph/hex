import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import type { MenuItem } from "../page"

export function MenuItems({
  items,
  selectedCategory,
  onAddItem,
}: {
  items: MenuItem[]
  selectedCategory: string
  onAddItem: (item: MenuItem) => void
}) {
  const filteredItems = selectedCategory === "all" ? items : items.filter((item) => item.category === selectedCategory)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredItems.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <CardHeader className="p-0">
            <div className="relative h-48">
              <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              <Badge variant={item.isVeg ? "default" : "destructive"} className="absolute top-2 right-2">
                {item.isVeg ? "Vegano" : "Não Vegano"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="text-lg">{item.name}</CardTitle>
            <p className="text-2xl font-bold mt-2">R$ {item.price.toFixed(2)}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button onClick={() => onAddItem(item)} className="w-full">
              Adicionar ao Pedido
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

