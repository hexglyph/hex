"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { TaskBoard } from "./components/task-board"
import { TaskDialog } from "./components/task-dialog"
import { Plus } from "lucide-react"

export type Task = {
  id: string
  title: string
  description: string
  status: "todo" | "in-progress" | "done"
  priority: "low" | "medium" | "high"
}

export default function TaskManagementPage() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Criar documentação do projeto",
      description: "Elaborar documentação técnica detalhada do sistema",
      status: "todo",
      priority: "high",
    },
    {
      id: "2",
      title: "Implementar autenticação",
      description: "Adicionar sistema de login com OAuth",
      status: "in-progress",
      priority: "medium",
    },
    {
      id: "3",
      title: "Otimizar performance",
      description: "Melhorar tempo de carregamento das páginas",
      status: "done",
      priority: "low",
    },
  ])

  const [dialogOpen, setDialogOpen] = useState(false)

  const addTask = (task: Omit<Task, "id">) => {
    setTasks((prev) => [...prev, { ...task, id: Math.random().toString() }])
  }

  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, ...updates } : task)))
  }

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return
    }

    const { source, destination } = result

    if (source.droppableId !== destination.droppableId) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === result.draggableId
            ? { ...task, status: destination.droppableId as "todo" | "in-progress" | "done" }
            : task,
        ),
      )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="border-b border-gray-700 bg-gray-900 sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/" className="text-blue-600 font-bold">
            HEXGLYPH Tasks
          </Link>
          <div className="flex items-center gap-4">
            <Button onClick={() => setDialogOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Nova Tarefa
            </Button>
            <Button asChild variant="outline">
              <Link href="/#solucoes">Voltar às Soluções</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Gestão de Tarefas</h2>
          </div>
          <TaskBoard tasks={tasks} onUpdateTask={updateTask} onDeleteTask={deleteTask} onDragEnd={onDragEnd} />
        </div>
      </main>

      <TaskDialog open={dialogOpen} onOpenChange={setDialogOpen} onSubmit={addTask} />
    </div>
  )
}

