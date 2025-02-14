import { Button } from "@/components/ui/button"

interface Category {
  id: string
  name: string
  itemCount: number
}

export function MenuCategories({
  categories,
  selected,
  onSelect,
}: {
  categories: Category[]
  selected: string
  onSelect: (id: string) => void
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selected === category.id ? "default" : "outline"}
          className="whitespace-nowrap"
          onClick={() => onSelect(category.id)}
        >
          {category.name}
          <span className="ml-2 text-xs">({category.itemCount} items)</span>
        </Button>
      ))}
    </div>
  )
}

