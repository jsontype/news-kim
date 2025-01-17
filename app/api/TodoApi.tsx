import { TodoList } from 'app/types/TodoList'

//query포함 https://jsonplaceholder.typicode.com/users/1/todos로 userid=1만 가져오기 가능
const API_URL = 'https://jsonplaceholder.typicode.com/todos'

const fetchAPI = async () => {
  try {
    const res = await fetch(`${API_URL}`)

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`)
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error('failed to fetch', error)
    throw error
  }
}

export const todoListApi = (): Promise<TodoList[]> => {
  return fetchAPI()
}
