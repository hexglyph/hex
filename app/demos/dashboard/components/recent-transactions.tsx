import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function RecentTransactions() {
  const transactions = [
    {
      id: "1",
      amount: -89.9,
      date: "Hoje, 13:45",
      description: "Netflix",
      category: "Entretenimento",
      icon: "N",
    },
    {
      id: "2",
      amount: -156.0,
      date: "Hoje, 10:30",
      description: "Supermercado Extra",
      category: "Alimentação",
      icon: "E",
    },
    {
      id: "3",
      amount: 2500.0,
      date: "Ontem",
      description: "Salário",
      category: "Receita",
      icon: "S",
    },
    {
      id: "4",
      amount: -49.9,
      date: "Ontem",
      description: "Spotify",
      category: "Entretenimento",
      icon: "S",
    },
  ]

  return (
    <div className="space-y-8">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback>{transaction.icon}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{transaction.description}</p>
            <p className="text-sm text-muted-foreground">{transaction.category}</p>
          </div>
          <div className="ml-auto text-sm font-medium">
            <span className={transaction.amount > 0 ? "text-green-500" : "text-red-500"}>
              {transaction.amount.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

