"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

type CryptoData = {
  id: number
  name: string
  symbol: string
  price: number
  change: number
  amount: number
  value: number
}

const cryptoData: CryptoData[] = [
  { id: 1, name: "Bitcoin", symbol: "BTC", price: 30000, change: 2.5, amount: 0.5, value: 15000 },
  { id: 2, name: "Ethereum", symbol: "ETH", price: 2000, change: -1.2, amount: 3, value: 6000 },
  { id: 3, name: "Cardano", symbol: "ADA", price: 0.5, change: 5.7, amount: 1000, value: 500 },
  { id: 4, name: "Polkadot", symbol: "DOT", price: 7, change: -0.8, amount: 100, value: 700 },
]

const historicalData = [
  { date: "2023-01", value: 20000 },
  { date: "2023-02", value: 22000 },
  { date: "2023-03", value: 19000 },
  { date: "2023-04", value: 23000 },
  { date: "2023-05", value: 21000 },
  { date: "2023-06", value: 22200 },
]

export function Crypto() {
  const [sortColumn, setSortColumn] = useState<keyof CryptoData>("value")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")

  const sortedData = [...cryptoData].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
    return 0
  })

  const handleSort = (column: keyof CryptoData) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("desc")
    }
  }

  const totalValue = cryptoData.reduce((sum, crypto) => sum + crypto.value, 0)

  return (
    <div className="space-y-4">
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader>
          <CardTitle>Portfólio de Criptomoedas</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead onClick={() => handleSort("name")} className="cursor-pointer">
                  Nome
                </TableHead>
                <TableHead onClick={() => handleSort("price")} className="cursor-pointer">
                  Preço
                </TableHead>
                <TableHead onClick={() => handleSort("change")} className="cursor-pointer">
                  24h %
                </TableHead>
                <TableHead onClick={() => handleSort("amount")} className="cursor-pointer">
                  Quantidade
                </TableHead>
                <TableHead onClick={() => handleSort("value")} className="cursor-pointer">
                  Valor
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedData.map((crypto) => (
                <TableRow key={crypto.id}>
                  <TableCell>
                    {crypto.name} ({crypto.symbol})
                  </TableCell>
                  <TableCell>R$ {crypto.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <span className={crypto.change >= 0 ? "text-green-500" : "text-red-500"}>
                      {crypto.change >= 0 ? (
                        <ArrowUpIcon className="inline h-4 w-4" />
                      ) : (
                        <ArrowDownIcon className="inline h-4 w-4" />
                      )}
                      {Math.abs(crypto.change)}%
                    </span>
                  </TableCell>
                  <TableCell>{crypto.amount}</TableCell>
                  <TableCell>R$ {crypto.value.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle>Valor Total do Portfólio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">R$ {totalValue.toFixed(2)}</div>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle>Histórico de Valor</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={historicalData}>
                <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `R$${value}`}
                />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Button>Comprar</Button>
            <Button variant="outline">Vender</Button>
            <Button variant="outline">Trocar</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

