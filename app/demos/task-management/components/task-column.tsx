// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Draggable, DraggableProvided } from "react-beautiful-dnd"
import type { Task } from "../page"
import { TaskCard } from "./task-card"

export function TaskColumn({
  tasks,
  onUpdate,
  onDelete,
}: {
  tasks: Task[]
  onUpdate: (id: string, updates: Partial<Task>) => void
  onDelete: (id: string) => void
}) {
  return (
    <>
      {tasks.map((task, index) => (
        <Draggable key={task.id} draggableId={task.id} index={index}>
          {(provided: DraggableProvided) => (
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
              <TaskCard
                task={task}
                onUpdate={(updates) => onUpdate(task.id, updates)}
                onDelete={() => onDelete(task.id)}
              />
            </div>
          )}
        </Draggable>
      ))}
    </>
  )
}

