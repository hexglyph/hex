"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const stocksData = [
  { id: 1, name: "AAPL", fullName: "Apple Inc.", price: 150.25, change: 2.5, amount: 10, value: 1502.5 },
  { id: 2, name: "GOOGL", fullName: "Alphabet Inc.", price: 2750.8, change: -1.2, amount: 5, value: 13754 },
  { id: 3, name: "MSFT", fullName: "Microsoft Corporation", price: 305.15, change: 0.8, amount: 15, value: 4577.25 },
  { id: 4, name: "AMZN", fullName: "Amazon.com, Inc.", price: 3380.5, change: -0.5, amount: 3, value: 10141.5 },
]

const historicalData = [
  { date: "2023-01", value: 25000 },
  { date: "2023-02", value: 27000 },
  { date: "2023-03", value: 26000 },
  { date: "2023-04", value: 28000 },
  { date: "2023-05", value: 29000 },
  { date: "2023-06", value: 30000 },
]

export function Stocks() {
  const [sortColumn, setSortColumn] = useState("value")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")

  const sortedData = [...stocksData].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
    return 0
  })

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("desc")
    }
  }

  const totalValue = stocksData.reduce((sum, stock) => sum + stock.value, 0)

  return (
    <div className="space-y-4">
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader>
          <CardTitle>Portfólio de Ações</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead onClick={() => handleSort("name")} className="cursor-pointer">
                  Símbolo
                </TableHead>
                <TableHead onClick={() => handleSort("fullName")} className="cursor-pointer">
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
              {sortedData.map((stock) => (
                <TableRow key={stock.id}>
                  <TableCell>{stock.name}</TableCell>
                  <TableCell>{stock.fullName}</TableCell>
                  <TableCell>R$ {stock.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <span className={stock.change >= 0 ? "text-green-500" : "text-red-500"}>
                      {stock.change >= 0 ? (
                        <ArrowUpIcon className="inline h-4 w-4" />
                      ) : (
                        <ArrowDownIcon className="inline h-4 w-4" />
                      )}
                      {Math.abs(stock.change)}%
                    </span>
                  </TableCell>
                  <TableCell>{stock.amount}</TableCell>
                  <TableCell>R$ {stock.value.toFixed(2)}</TableCell>
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
            <Button variant="outline">Analisar</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

