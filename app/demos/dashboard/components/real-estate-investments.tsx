"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const fiisData = [
  { id: 1, name: "HGLG11", fullName: "CGHG Logística", price: 185.5, change: 0.8, amount: 100, value: 18550 },
  {
    id: 2,
    name: "KNRI11",
    fullName: "Kinea Renda Imobiliária",
    price: 142.75,
    change: -0.5,
    amount: 150,
    value: 21412.5,
  },
  { id: 3, name: "MXRF11", fullName: "Maxi Renda", price: 10.2, change: 1.2, amount: 2000, value: 20400 },
  { id: 4, name: "XPLG11", fullName: "XP Log", price: 118.9, change: -0.3, amount: 80, value: 9512 },
]

const dividendData = [
  { month: "Jan", value: 500 },
  { month: "Fev", value: 520 },
  { month: "Mar", value: 510 },
  { month: "Abr", value: 530 },
  { month: "Mai", value: 540 },
  { month: "Jun", value: 550 },
]

export function RealEstateInvestments() {
  const [sortColumn, setSortColumn] = useState("value")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")

  const sortedData = [...fiisData].sort((a, b) => {
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

  const totalValue = fiisData.reduce((sum, fii) => sum + fii.value, 0)

  return (
    <div className="space-y-4">
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader>
          <CardTitle>Portfólio de FIIs</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead onClick={() => handleSort("name")} className="cursor-pointer">
                  Código
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
              {sortedData.map((fii) => (
                <TableRow key={fii.id}>
                  <TableCell>{fii.name}</TableCell>
                  <TableCell>{fii.fullName}</TableCell>
                  <TableCell>R$ {fii.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <span className={fii.change >= 0 ? "text-green-500" : "text-red-500"}>
                      {fii.change >= 0 ? (
                        <ArrowUpIcon className="inline h-4 w-4" />
                      ) : (
                        <ArrowDownIcon className="inline h-4 w-4" />
                      )}
                      {Math.abs(fii.change)}%
                    </span>
                  </TableCell>
                  <TableCell>{fii.amount}</TableCell>
                  <TableCell>R$ {fii.value.toFixed(2)}</TableCell>
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
            <CardTitle>Histórico de Dividendos</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={dividendData}>
                <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `R$${value}`}
                />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
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
            <Button variant="outline">Analisar Setor</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

