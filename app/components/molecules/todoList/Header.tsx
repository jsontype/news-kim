import { numberOfTodoListAtom } from 'app/store/numberOfTodoListAtom'
import { useRecoilValue } from 'recoil'
import '../../../global.css'

export default function Header() {
  const { complete, notComplete } = useRecoilValue(numberOfTodoListAtom)

  return (
    <div className="flex justify-between pb-2">
      <div className="text-4xl mb-4 font-bold">TodoList</div>
      <div className="flex-col justify-items-end">
        <p className="pr-1 mb-0.5 font-bold">{`TOTAL:${complete + notComplete}`}</p>
        <div>
          <span className="p-1.5 rounded-l-lg bg-blue-700">{`complete:${complete}`}</span>
          <span className="p-1.5 rounded-r-lg bg-red-700">{`not complete:${notComplete}`}</span>
        </div>
      </div>
    </div>
  )
}
