interface Props {
  isCompleted: boolean
  onClick?: () => void
}

export default function TodoToggle({ isCompleted, onClick }: Props) {
  return (
    <button
      className={'w-9 h-9 rounded-md bg-stone-600 p-1 hover:cursor-pointer'}
      onClick={onClick}
    >
      {isCompleted ? '🔵' : '🔴'}
    </button>
  )
}
