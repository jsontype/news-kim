import TodoAddButton from 'app/components/atom/todoList/TodoAddButton'
import { useRef, useState } from 'react'
import '../../../global.css'

interface Props {
  onAddItem: (title: string) => void
}

export default function AddTodoItem({ onAddItem }: Props) {
  const [input, setInputText] = useState('')
  const [isFocus, setIsFocus] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddItem(input)
    setInputText('')
    inputRef.current?.focus()
  }

  return (
    <>
      <form
        className={`pb-1 gap-x-3 todoItemsContainer ${isFocus && 'bg-orange-950'}`}
        onSubmit={handleSubmit}
      >
        <input
          ref={inputRef}
          className="w-9/12 py-2 pl-1 text-2xl border-none focus:outline-none"
          type="text"
          value={input}
          onChange={(e) => setInputText(e.target.value)}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          placeholder="Please input new todo"
        />
        <div className="flex gap-x-3 justify-center w-3/12">
          <TodoAddButton />
        </div>
      </form>
    </>
  )
}
