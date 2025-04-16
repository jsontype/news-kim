import { todoListApi } from 'app/api/TodoApi'
import AddTodoItem from 'app/components/molecules/todoList/AddTodoItem'
import TodoItems from 'app/components/molecules/todoList/TodoItems'
import { numberOfTodoListAtom } from 'app/store/numberOfTodoListAtom'
import { selectTodoStatusAtom } from 'app/store/selectTodoStatusAtom'
import type { TodoList } from 'app/types/TodoList'
import { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

export default function TodoList() {
  const [todos, setTodos] = useState<TodoList[]>([])
  const [newId, setNewId] = useState(0)
  const [renderTodos, setRenderTodos] = useState<TodoList[]>([])
  const setNumberOfTodoList = useSetRecoilState(numberOfTodoListAtom)
  const { selectComplete } = useRecoilValue(selectTodoStatusAtom)

  useEffect(() => {
    todoListApi()
      .then((data) => {
        const todoData = data.filter((item) => item.userId === 5)
        setTodos(todoData)
        setRenderTodos(todoData)

        const lastId = todoData[todoData.length - 1].id
        setNewId(lastId + 1)
      })
      .catch((error) => console.log('Failed to fetch todos', error))
  }, [])

  //head의 complete수 표시를 위한 계산
  useEffect(() => {
    const { complete, notComplete } = todos.reduce(
      (acc, todo) => {
        todo.completed ? acc.complete++ : acc.notComplete++
        return acc
      },
      { complete: 0, notComplete: 0 },
    )
    setNumberOfTodoList({ complete, notComplete })
  }, [todos])

  // complete싱태에 따른 것만 표시
  useEffect(() => {
    const filteredTodos = todos.filter((todo) => {
      if (selectComplete === 'complete') return todo.completed === true
      else if (selectComplete === 'notComplete') return todo.completed === false
      else return true
    })
    setRenderTodos(filteredTodos)
  }, [selectComplete, todos])

  // todo추가
  const onAddItem = (title: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { userId: 5, id: newId, title, completed: false },
    ])
    setNewId((prevNewId) => prevNewId + 1)
  }

  // todo삭제
  const onDeleteItem = (id: number) => {
    setTodos((prevTodos) => prevTodos?.filter((todo) => todo.id !== id))
  }

  // 진행상태 변경
  const onToggleItem = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos?.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo
      }),
    )
  }

  // title 수정
  const onEditItem = (id: number, title: string) => {
    setTodos((prevTodos) =>
      prevTodos?.map((todo) => {
        return todo.id === id ? { ...todo, title } : todo
      }),
    )
  }

  return (
    <>
      {renderTodos.length !== 0 ? (
        <div>
          {renderTodos.map((todo, index) => {
            return (
              <TodoItems
                key={`${todo.id}+${index}`}
                id={todo.id}
                title={todo.title}
                isCompleted={todo.completed}
                onEditItem={onEditItem}
                onToggleItem={onToggleItem}
                onDeleteItem={onDeleteItem}
              />
            )
          })}
          <AddTodoItem onAddItem={onAddItem} />
        </div>
      ) : (
        <div>Todo list has 0. let's add new Todo</div>
      )}
    </>
  )
}
