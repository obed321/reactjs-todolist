import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {
  
  
  const [todos, setTodos] = useState([
    
  ])
  const [todoValue, setTodoValue] = useState("")

  function saveData(newList) {
    localStorage.setItem('todo', JSON.stringify({todos:
      newList
    }))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    saveData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
      const newTodoList = todos.filter((todoItem, todoIndex) => {
        return todoIndex !== index
      })
      setTodos(newTodoList)
  }

  function handleEditTodo(index) {
     const valueToBeEdited = todos[index]
     setTodoValue(valueToBeEdited)
     handleDeleteTodo(index)
  }

    useEffect(() => {
       if(!localStorage) {
        return
       }

       let localTodos = localStorage.getItem("todos")

       if(!localTodos) {

          return
       }

       localTodos = JSON.parse(localTodos).todos
       setTodos(localTodos)


    }, [])

    return (
      <>
          <TodoInput 
            todoValue={todoValue} 
            setTodoValue={setTodoValue} 
            handleAddTodos={handleAddTodos}
          />
          
          <TodoList 
            handleEditTodo={handleEditTodo}
            handleDeleteTodo={handleDeleteTodo} 
            todos={todos} 
          />
      </>
    )
}

export default App
