import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos,toggleComplete, deleteTodo,editTodo}) => {

  return (
    <div>
        <h1> TODO LIST</h1>
        {todos.map((todo,index) => (
            <TodoItem key={index} todo={todo} index={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
        ))}
    </div>
  )
}

export default TodoList;
