"use client"
import { DragDropContext, Droppable, type DropResult } from "@hello-pangea/dnd"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Task } from "../page"
import { TaskColumn } from "./task-column"

const columns = [
  {
    id: "todo",
    title: "A Fazer",
  },
  {
    id: "in-progress",
    title: "Em Progresso",
  },
  {
    id: "done",
    title: "Concluído",
  },
] as const

interface TaskBoardProps {
  tasks: Task[]
  onUpdateTask: (id: string, updates: Partial<Task>) => void
  onDeleteTask: (id: string) => void
  onDragEnd: (result: DropResult) => void
}

export function TaskBoard({ tasks, onUpdateTask, onDeleteTask, onDragEnd }: TaskBoardProps) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((column) => (
          <Card key={column.id}>
            <CardHeader>
              <CardTitle>{column.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Droppable droppableId={column.id}>
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                    <TaskColumn
                      tasks={tasks.filter((task) => task.status === column.id)}
                      onUpdate={onUpdateTask}
                      onDelete={onDeleteTask}
                    />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </CardContent>
          </Card>
        ))}
      </div>
    </DragDropContext>
  )
}

