import React from 'react';
import { render } from '@testing-library/react';
import Todo from './Todo';

describe('<Todo />', () => {
  const mockTodo = { id: 1, text: 'test todo' };
  it('should render a Todo', async () => {
    const { getByTestId, debug } = render(<Todo todo={mockTodo} />);
    const todo1 = getByTestId('tododiv-1');
    expect(todo1.textContent).toEqual('1test todoX');
  });
});
