import clsx from 'clsx'

interface Props {
  text: string
  backgroundColor?: 'red' | 'yellow' | 'blue' | 'green' | 'gray' | 'transparent'
  onClick?: () => void
}

export default function TodoButton({
  text,
  backgroundColor = 'transparent',
  onClick,
}: Props) {
  const buttonColorType = {
    red: 'bg-red-600',
    yellow: 'bg-yellow-200',
    blue: 'bg-blue-800',
    green: 'bg-green-600',
    gray: 'bg-gray-400',
    transparent: 'transparent',
  }

  return (
    <button
      className={clsx(
        'w-9',
        'h-9',
        'rounded-md',
        'p-1',
        backgroundColor !== 'transparent' && buttonColorType[backgroundColor],
        'hover:cursor-pointer',
      )}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
