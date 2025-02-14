"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, CheckCircle, AlertTriangle, XCircle } from "lucide-react"

const notifications = [
  {
    id: 1,
    type: "info",
    message: "Nova mensagem da equipe de suporte",
    time: "Há 5 minutos",
  },
  {
    id: 2,
    type: "warning",
    message: "Atualização de sistema agendada para amanhã",
    time: "Há 2 horas",
  },
  {
    id: 3,
    type: "success",
    message: "Meta mensal de vendas atingida",
    time: "Há 1 dia",
  },
  {
    id: 4,
    type: "error",
    message: "Falha na sincronização de dados",
    time: "Há 3 dias",
  },
]

export function Notifications() {
  const [activeNotifications, setActiveNotifications] = useState(notifications)

  const removeNotification = (id: number) => {
    setActiveNotifications(activeNotifications.filter((n) => n.id !== id))
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "info":
        return <Bell className="h-5 w-5 text-blue-500" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "error":
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return <Bell className="h-5 w-5 text-blue-500" />
    }
  }

  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader>
        <CardTitle>Notificações</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activeNotifications.map((notification) => (
            <div key={notification.id} className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg">
              {getIcon(notification.type)}
              <div className="flex-1">
                <p className="font-medium">{notification.message}</p>
                <p className="text-sm text-gray-400">{notification.time}</p>
              </div>
              <Button variant="ghost" size="sm" onClick={() => removeNotification(notification.id)}>
                Marcar como lida
              </Button>
            </div>
          ))}
          {activeNotifications.length === 0 && <p className="text-center text-gray-400">Não há novas notificações.</p>}
        </div>
      </CardContent>
    </Card>
  )
}

