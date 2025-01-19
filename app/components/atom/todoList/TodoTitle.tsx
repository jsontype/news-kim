import { useEffect, useRef, useState } from 'react'

interface Props {
  title: string
  isOnEdit: boolean
  setNewTitle: (title: string) => void
  isCompleted: boolean
}

export default function TodoTitle({
  title,
  isOnEdit,
  setNewTitle,
  isCompleted,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [editTitle, setEditTitle] = useState(title)

  useEffect(() => {
    isOnEdit && inputRef.current?.focus()
  }, [isOnEdit])

  useEffect(() => {
    setNewTitle(editTitle)
  }, [editTitle])

  return (
    <>
      {isOnEdit ? (
        <input
          ref={inputRef}
          className="w-9/12 py-2 pl-1 text-1xl border-none focus:outline-none"
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
      ) : (
        <span
          className={`pl-2 text-lg font-bold ${isCompleted && 'line-through'}`}
        >
          {title}
        </span>
      )}
    </>
  )
}
