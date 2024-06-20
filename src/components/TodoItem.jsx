import React, { useState } from "react";

export const TodoItem = ({
  todo,
  toggleComplete,
  deleteTodo,
  editTodo,
  index,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const handleEdit = () => {
    setNewTodo(todo.text);
    setIsEdit(!isEdit);
  };

  const handleSave = (id, newText) => {
    editTodo(id, newText);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() => toggleComplete(index)}
      />
      {isEdit ? (
        <input
          type="text"
          value={newTodo}
          placeholder="EDIT TODO"
          onChange={(e) => setNewTodo(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      {isEdit ? (
        <button onClick={() => handleSave(index, newTodo)}>save</button>
      ) : (
        <button onClick={() => handleEdit()}>Edit</button>
      )}

      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
};
