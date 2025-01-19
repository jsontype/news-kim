export default function TodoAddButton() {
  return (
    <div className="p-1 flex items-center justify-center">
      <button
        type="submit"
        className="pb-1 w-12 h-12 flex items-center justify-center rounded-full bg-green-600 text-3xl font-black hover:cursor-pointer hover:text-4xl"
      >
        +
      </button>
    </div>
  )
}
