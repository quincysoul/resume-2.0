import React from 'react';
import { getByDisplayValue, render } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

describe('<App />', () => {
  const todoList = [
    { id: 1, text: 'hello world' },
  ];

  it('should render todolist', () => {
    const { debug, getByTestId, getElementsByClassName } = render(<App todoList={todoList} />);
    const todoListWrapper = getByTestId('todoList-wrapper');
    user.type(getByTestId('inputTodo'), 'newTODO !');
    user.click(getByTestId('submitButton'));
    expect(getByTestId('tododiv-0').textContent).toContain('newTODO !');
    // expect(todoListWrapper.getElementsByClassName('todoBody').length).toBeGreaterThan(0);
  });

//   it('should call deleteTodo when user clicks X', () => {
//     const mockDeleteTodo = jest.fn();
//     const { debug, getByTestId } = render(
//       <TodoList todoList={todoList} deleteTodo={mockDeleteTodo} />,
//     );
//     user.click(getByTestId('tododiv-1').getElementsByClassName('delete')[0]);
//     expect(mockDeleteTodo).toBeCalled();
//   });
});
