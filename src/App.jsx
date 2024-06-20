import { useEffect, useState } from 'react'
import './App.css'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);
  const [filter,setFilter] = useState('ALL');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if(storedTodos){
      setTodos(storedTodos);
    }
  },[]);

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos]);

  const addTodo = (text) => {
    const newTodo = {
      text,
      complete:false
    }
    setTodos([...todos,newTodo]);

  }

  const toggleComplete = (id) => {
    setTodos(todos.map((todo,index) => id === index ?{...todo,complete:!todo.complete}:todo));
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo,index) => index !== id));
  }

  const editTodo = (id,newText) => {
    setTodos(todos.map((todo,index) => id === index ?{...todo,text:newText}:todo));

  }

  const handleFilter  = (filter) => {
    setFilter(filter)
  }

  const filterTodos = todos.filter(todo => {
    if(filter === 'COMPLETED') return todo.complete;
    if(filter === 'INCOMPLETED') return !todo.complete;
    return true;
  })
  return (
    <>

     <TodoForm addtodo = {addTodo}/>
     <select value={filter} onChange={(e) => handleFilter(e.target.value)}>
      <option value="ALL">ALL</option>
      <option value="COMPLETED">COMPLETED</option>
      <option value="INCOMPLETED">INCOMPLETED</option>
     </select>
     <TodoList todos={filterTodos}  toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}></TodoList>


    </>
  )
}

export default App
