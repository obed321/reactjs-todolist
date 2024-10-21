import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  
    const { todos } = props;

    
  
    return (
    <ul className='main'>
      {todos.map((todoItem, todoIndex) => {
        return (
           <TodoCard {...props} key={todoIndex} index={todoIndex}>
                <p>{todoItem}</p>
           </TodoCard>
        )
      })}
    </ul>
  )
}
