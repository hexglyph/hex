import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Minus, Plus, Trash2 } from "lucide-react"
import type { OrderItem } from "../page"

export function OrderPanel({
  items,
  onIncrement,
  onDecrement,
  tableNumber,
  customerName,
  onPlaceOrder,
}: {
  items: OrderItem[]
  onIncrement: (item: OrderItem) => void
  onDecrement: (itemId: string) => void
  tableNumber: string
  customerName: string
  onPlaceOrder: () => void
}) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.05
  const total = subtotal + tax

  return (
    <Card className="h-[calc(100vh-8rem)] flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Mesa {tableNumber}</span>
          <span className="text-sm font-normal text-muted-foreground">{customerName}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-auto">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-muted-foreground">R$ {item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => onDecrement(item.id)}>
                  {item.quantity === 1 ? <Trash2 className="h-4 w-4" /> : <Minus className="h-4 w-4" />}
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => onIncrement(item)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <div className="w-full space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>R$ {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Taxa (5%)</span>
            <span>R$ {tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>
        </div>
        <div className="grid w-full grid-cols-3 gap-2">
          <Button variant="outline">Dinheiro</Button>
          <Button variant="outline">Cartão</Button>
          <Button variant="outline">PIX</Button>
        </div>
        <Button className="w-full" size="lg" onClick={onPlaceOrder} disabled={items.length === 0}>
          Fazer Pedido
        </Button>
      </CardFooter>
    </Card>
  )
}

