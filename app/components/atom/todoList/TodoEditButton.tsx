interface Props {
  isOnEdit: boolean
  setIsOnEdit: () => void
  onEditItem: () => void
}

export default function TodoEditButton({
  isOnEdit,
  setIsOnEdit,
  onEditItem,
}: Props) {
  return (
    <>
      {isOnEdit ? (
        <button
          className="w-9 h-9 rounded-md p-1 bg-blue-800 hover:cursor-pointer"
          onClick={() => {
            onEditItem()
            setIsOnEdit()
          }}
        >
          {'⭕️'}
        </button>
      ) : (
        <button
          className="w-9 h-9 rounded-md p-1 bg-blue-800 hover:cursor-pointer"
          onClick={setIsOnEdit}
        >
          {'✏️'}
        </button>
      )}
    </>
  )
}
