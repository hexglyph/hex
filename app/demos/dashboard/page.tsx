"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpIcon, CreditCard, DollarSign, Users } from "lucide-react"
import { Overview } from "./components/overview"
import { RecentTransactions } from "./components/recent-transactions"
import { AccountsList } from "./components/accounts-list"
import { Analytics } from "./components/analytics"
import { Reports } from "./components/reports"
import { Notifications } from "./components/notifications"
import { Crypto } from "./components/crypto"
import { Stocks } from "./components/stocks"
import { RealEstateInvestments } from "./components/real-estate-investments"

export default function DashboardDemo() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/" className="text-blue-600 font-bold">
            HEXGLYPH
          </Link>
          <Button asChild variant="outline">
            <Link href="/#portfolio">Voltar ao Portfolio</Link>
          </Button>
        </div>
      </header>

      <main className="container py-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <Button>Download Relatório</Button>
            </div>
          </div>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="crypto">Criptomoedas</TabsTrigger>
              <TabsTrigger value="stocks">Ações</TabsTrigger>
              <TabsTrigger value="realestate">FIIs</TabsTrigger>
              <TabsTrigger value="analytics">Análise</TabsTrigger>
              <TabsTrigger value="reports">Relatórios</TabsTrigger>
              <TabsTrigger value="notifications">Notificações</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-gray-800 border-gray-700 text-white">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-400">Saldo Total</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">R$ 45.231,89</div>
                    <p className="text-xs text-gray-400">+20.1% em relação ao mês anterior</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 border-gray-700 text-white">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-400">Gastos</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">R$ 3.542,00</div>
                    <p className="text-xs text-gray-400">-4% em relação ao mês anterior</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 border-gray-700 text-white">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-400">Investimentos</CardTitle>
                    <ArrowUpIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">R$ 12.234,00</div>
                    <p className="text-xs text-gray-400">+12% em relação ao mês anterior</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 border-gray-700 text-white">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-400">Metas Ativas</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-gray-400">2 metas próximas de conclusão</p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="bg-gray-800 border-gray-700 text-white col-span-4">
                  <CardHeader>
                    <CardTitle>Visão Geral</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 border-gray-700 text-white col-span-3">
                  <CardHeader>
                    <CardTitle>Transações Recentes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RecentTransactions />
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="bg-gray-800 border-gray-700 text-white col-span-4">
                  <CardHeader>
                    <CardTitle>Suas Contas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AccountsList />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="crypto">
              <Crypto />
            </TabsContent>
            <TabsContent value="stocks">
              <Stocks />
            </TabsContent>
            <TabsContent value="realestate">
              <RealEstateInvestments />
            </TabsContent>
            <TabsContent value="analytics">
              <Analytics />
            </TabsContent>
            <TabsContent value="reports">
              <Reports />
            </TabsContent>
            <TabsContent value="notifications">
              <Notifications />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

