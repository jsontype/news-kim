export interface TodoList {
  userId: number
  id: number
  title: string
  completed: boolean
}

export type SELECT_STATUS = 'complete' | 'notComplete' | 'none'
