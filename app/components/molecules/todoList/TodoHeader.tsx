import { numberOfTodoListAtom } from 'app/store/numberOfTodoListAtom'
import { useRecoilState, useRecoilValue } from 'recoil'
import '../../../global.css'
import { selectTodoStatusAtom } from 'app/store/selectTodoStatusAtom'
import { SELECT_STATUS } from 'app/types/TodoList'

export default function TodoHeader() {
  const { complete, notComplete } = useRecoilValue(numberOfTodoListAtom)
  const [completeStatus, setCompleteStatus] =
    useRecoilState(selectTodoStatusAtom)

  const onClick = (status: SELECT_STATUS) => {
    setCompleteStatus({ selectComplete: status })
  }

  return (
    <div className="flex justify-between pb-2">
      <div className="text-4xl mb-4 font-bold">TodoList</div>
      <div className="flex-col justify-items-end">
        <p className="pr-1 mb-0.5 font-bold">{`TOTAL:${complete + notComplete}`}</p>
        <div>
          <button
            className="p-1.5 rounded-l-lg bg-blue-700 hover:cursor-pointer"
            type="button"
            onClick={() => {
              completeStatus.selectComplete === 'complete'
                ? onClick('none')
                : onClick('complete')
            }}
          >{`complete:${complete}`}</button>
          <button
            className="p-1.5 rounded-r-lg bg-red-700 hover:cursor-pointer"
            type="button"
            onClick={() => {
              completeStatus.selectComplete === 'notComplete'
                ? onClick('none')
                : onClick('notComplete')
            }}
          >{`not complete:${notComplete}`}</button>
        </div>
      </div>
    </div>
  )
}
