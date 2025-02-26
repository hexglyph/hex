/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Draggable } from "@hello-pangea/dnd"
import { TaskCard } from "./task-card"

export function TaskColumn({ tasks, onUpdate, onDelete }) {
  return (
    <>
      {tasks.map((task, index) => (
        <Draggable key={task.id} draggableId={task.id} index={index}>
          {(provided) => (
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