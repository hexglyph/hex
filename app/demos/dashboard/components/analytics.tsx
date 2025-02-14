"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const performanceData = [
  { month: "Jan", revenue: 4000, expenses: 2400 },
  { month: "Fev", revenue: 3000, expenses: 1398 },
  { month: "Mar", revenue: 2000, expenses: 9800 },
  { month: "Abr", revenue: 2780, expenses: 3908 },
  { month: "Mai", revenue: 1890, expenses: 4800 },
  { month: "Jun", revenue: 2390, expenses: 3800 },
]

const customerData = [
  { month: "Jan", customers: 100 },
  { month: "Fev", customers: 120 },
  { month: "Mar", customers: 150 },
  { month: "Abr", customers: 180 },
  { month: "Mai", customers: 220 },
  { month: "Jun", customers: 270 },
]

export function Analytics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="bg-gray-800 border-gray-700 text-white col-span-4">
        <CardHeader>
          <CardTitle>Desempenho Financeiro</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `R$${value}`}
              />
              <Tooltip />
              <Bar dataKey="revenue" fill="#4ade80" radius={[4, 4, 0, 0]} />
              <Bar dataKey="expenses" fill="#f43f5e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700 text-white col-span-3">
        <CardHeader>
          <CardTitle>Crescimento de Clientes</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={customerData}>
              <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip />
              <Line type="monotone" dataKey="customers" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700 text-white col-span-7">
        <CardHeader>
          <CardTitle>Métricas Chave</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-green-500">89%</span>
              <span className="text-sm text-gray-400">Taxa de Retenção</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-blue-500">4.7</span>
              <span className="text-sm text-gray-400">Satisfação do Cliente</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-yellow-500">23%</span>
              <span className="text-sm text-gray-400">Crescimento de Receita</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

