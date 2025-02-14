import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { KitchenOrder } from "../page"

const statusTranslations = {
  pendente: "Pendente",
  preparando: "Preparando",
  pronto: "Pronto",
}

const statusColors = {
  pendente: "bg-yellow-100 text-yellow-800",
  preparando: "bg-blue-100 text-blue-800",
  pronto: "bg-green-100 text-green-800",
}

export function KitchenOrders({
  orders,
  onUpdateStatus,
}: {
  orders: KitchenOrder[]
  onUpdateStatus: (orders: KitchenOrder[]) => void
}) {
  const updateOrderStatus = (orderId: string, status: KitchenOrder["status"]) => {
    onUpdateStatus(orders.map((order) => (order.id === orderId ? { ...order, status } : order)))
  }

  if (orders.length === 0) {
    return null
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Pedidos na Cozinha</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Mesa {order.tableNumber}</span>
                <span className={`text-sm px-2 py-1 rounded-full ${statusColors[order.status]}`}>
                  {statusTranslations[order.status]}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {order.items.map((item) => (
                  <li key={item.id} className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="font-medium">x{item.quantity}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex gap-2">
              {order.status === "pendente" && (
                <Button className="flex-1" onClick={() => updateOrderStatus(order.id, "preparando")}>
                  Iniciar Preparo
                </Button>
              )}
              {order.status === "preparando" && (
                <Button className="flex-1" onClick={() => updateOrderStatus(order.id, "pronto")}>
                  Marcar como Pronto
                </Button>
              )}
              {order.status === "pronto" && (
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => onUpdateStatus(orders.filter((o) => o.id !== order.id))}
                >
                  Finalizar Pedido
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

