import { BanknoteIcon as Bank, CreditCard, Wallet } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function AccountsList() {
  const accounts = [
    {
      name: "Conta Corrente",
      bank: "Nubank",
      balance: 3450.9,
      icon: Bank,
      color: "text-purple-500",
      progress: 65,
    },
    {
      name: "Cartão de Crédito",
      bank: "Itaú",
      balance: -1234.56,
      icon: CreditCard,
      color: "text-blue-500",
      progress: 30,
    },
    {
      name: "Carteira",
      bank: "Dinheiro",
      balance: 150.0,
      icon: Wallet,
      color: "text-green-500",
      progress: 15,
    },
  ]

  return (
    <div className="space-y-8">
      {accounts.map((account) => (
        <div key={account.name} className="flex items-center">
          <account.icon className={`h-9 w-9 ${account.color}`} />
          <div className="ml-4 space-y-1 flex-1">
            <div className="flex justify-between">
              <p className="text-sm font-medium leading-none">{account.name}</p>
              <p className={`text-sm font-medium ${account.balance < 0 ? "text-red-500" : "text-green-500"}`}>
                {account.balance.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">{account.bank}</p>
            <Progress value={account.progress} className="h-2" />
          </div>
        </div>
      ))}
    </div>
  )
}

