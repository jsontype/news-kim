import TodoButton from 'app/components/atom/todoList/TodoButton'
import TodoEditButton from 'app/components/atom/todoList/TodoEditButton'
import TodoTitle from 'app/components/atom/todoList/TodoTitle'
import TodoToggle from 'app/components/atom/todoList/TodoToggle'
import { useState } from 'react'

interface Props {
  id: number
  title: string
  isCompleted: boolean
  onEditItem: (id: number, title: string) => void
  onToggleItem: (id: number) => void
  onDeleteItem: (id: number) => void
}

export default function TodoItems({
  id,
  title,
  isCompleted,
  onEditItem,
  onToggleItem,
  onDeleteItem,
}: Props) {
  const [isOnEdit, setIsOnEdit] = useState(false)
  const [newTitle, setNewTitle] = useState(title)

  return (
    <div
      className={`todoItemsContainer ${isCompleted && 'bg-gray-700'} ${isOnEdit && 'bg-orange-950'}`}
    >
      <TodoTitle
        title={title}
        isOnEdit={isOnEdit}
        setNewTitle={setNewTitle}
        isCompleted={isCompleted}
      />
      <div className="flex gap-x-3">
        <TodoEditButton
          isOnEdit={isOnEdit}
          setIsOnEdit={() => setIsOnEdit(!isOnEdit)}
          onEditItem={() => onEditItem(id, newTitle)}
        />
        <TodoToggle
          isCompleted={isCompleted}
          onClick={() => onToggleItem(id)}
        />
        <TodoButton
          text="❌"
          backgroundColor="gray"
          onClick={() => onDeleteItem(id)}
        />
      </div>
    </div>
  )
}
