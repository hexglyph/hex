import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface TaskCardProps {
  task: {
    id: string
    title: string
    status: "todo" | "in-progress" | "done"
  }
  onUpdate: (data: Partial<TaskCardProps["task"]>) => void
  onDelete: () => void
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onUpdate, onDelete }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
      </CardHeader>
      <CardContent>{/* Task details can go here */}</CardContent>
      <CardFooter className="justify-end">
        <Button variant="ghost" size="icon" onClick={onDelete}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

