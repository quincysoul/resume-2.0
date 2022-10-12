import React from 'react';
import Todo from './Todo';

function TodoList({
  todoList, setTodoList, deleteTodo,
}) {
  const [idCounter, setIdCounter] = React.useState(1);
  const [newTodoInput, setNewTodoInput] = React.useState('');

  const handleNewTodoChange = (e) => {
    setNewTodoInput(e.target.value);
  };
  const handleNewSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { id: todoList.length, text: newTodoInput }]);
    setIdCounter(idCounter + 1);
    setNewTodoInput('');
  };

  const renderTodos = () => todoList.map((todo) => <Todo todo={todo} key={`todo-${todo.id}`} deleteTodo={deleteTodo} />);

  return (
    <div data-testid="todoList-wrapper">
      <h1>New Todo:</h1>
      <input value={newTodoInput} onChange={handleNewTodoChange} id="inputTodo" data-testid="inputTodo" />
      <button type="submit" onClick={handleNewSubmit} data-testid="submitButton">Submit</button>
      <h1>Todo List:</h1>
      {renderTodos()}
    </div>
  );
}

export default TodoList;
