import React, { useState } from "react";

export const TodoForm = ({ addtodo }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    addtodo(todo)
    setTodo('')

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        placeholder="NEW TODO"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">ADD TODO</button>
    </form>
  );
};
