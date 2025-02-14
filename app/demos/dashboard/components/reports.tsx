"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, Eye } from "lucide-react"

const reports = [
  { id: 1, name: "Relatório Financeiro Q2 2023", date: "2023-06-30", downloads: 45 },
  { id: 2, name: "Análise de Mercado - Junho 2023", date: "2023-06-15", downloads: 32 },
  { id: 3, name: "Relatório de Satisfação do Cliente", date: "2023-05-31", downloads: 78 },
  { id: 4, name: "Desempenho de Vendas - Maio 2023", date: "2023-05-31", downloads: 56 },
  { id: 5, name: "Análise de Concorrentes Q2 2023", date: "2023-06-30", downloads: 23 },
]

export function Reports() {
  const [selectedReport, setSelectedReport] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader>
          <CardTitle>Relatórios Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome do Relatório</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Downloads</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>{report.name}</TableCell>
                  <TableCell>{report.date}</TableCell>
                  <TableCell>{report.downloads}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" onClick={() => setSelectedReport(report.id)}>
                        <Eye className="h-4 w-4 mr-1" />
                        Visualizar
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Baixar
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      {selectedReport && (
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle>Visualização do Relatório</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Aqui seria exibida uma prévia do relatório selecionado (ID: {selectedReport})</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

