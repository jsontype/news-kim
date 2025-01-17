import { atom } from 'recoil'

export const numberOfTodoListAtom = atom({
  key: 'totalTodoList',
  default: {
    complete: 0,
    notComplete: 0,
  },
})
