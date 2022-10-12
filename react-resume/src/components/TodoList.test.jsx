import React from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import TodoList from './TodoList';
import App from '../App';

describe('<TodoList />', () => {
  const todoList = [
    { id: 1, text: 'hello world' },
  ];

  it('should render todolist', () => {
    const { debug, getByTestId, getElementsByClassName } = render(<TodoList todoList={todoList} />);
    const todoListWrapper = getByTestId('todoList-wrapper');
    expect(todoListWrapper.getElementsByClassName('todoBody').length).toBeGreaterThan(0);
  });

  it('should call deleteTodo when user clicks X', () => {
    const mockDeleteTodo = jest.fn();
    const { debug, getByTestId } = render(
      <TodoList todoList={todoList} deleteTodo={mockDeleteTodo} />,
    );
    user.click(getByTestId('tododiv-1').getElementsByClassName('delete')[0]);
    expect(mockDeleteTodo).toBeCalled();
  });
});
