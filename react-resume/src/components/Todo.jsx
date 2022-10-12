import React from 'react';

function Todo({ todo, deleteTodo }) {
  const { id, text } = todo;
  return (
    <div className="todoBody" data-testid={`tododiv-${id}`}>
      <div className="id">{id}</div>
      <div className="text">{text}</div>
      <div className="delete" onClick={() => deleteTodo(id)}>X</div>
    </div>
  );
}

export default Todo;
