import { SELECT_STATUS } from 'app/types/TodoList'
import { atom } from 'recoil'

interface SelectTodoStatus {
  selectComplete: SELECT_STATUS
}

export const selectTodoStatusAtom = atom<SelectTodoStatus>({
  key: 'selectTodoStatus',
  default: {
    selectComplete: 'none',
  },
})
