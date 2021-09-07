/* eslint-disable max-len */
/* eslint-disable react/display-name */
import TodoList from './todoList';
import { render } from '@testing-library/react';
import TodoItem from './todoItem';
import context from '../core/context';
import React from 'react';

jest.mock('../core/context', () => ({
	// eslint-disable-next-line no-magic-numbers
	state: { todoArr: [Symbol('text')] },
}));

jest.mock('./todoItem.js', () => jest.fn().mockImplementation((item) => <div key={ item } role={ item }/>));
describe('Todo List', () => {
	test('render components', () => {
		const component = render(TodoList())
			.getByRole('todoList');

		expect(component).toBeInTheDocument();
	});

	test.only('map todo Item Func', () => {
		jest.spyOn(context.state.todoArr, 'map');
		const component = render(TodoList())
			.getByRole('todoList');

		expect(component).toBeInTheDocument();
		expect(context.state.todoArr.map).toHaveBeenCalledWith(TodoItem);
		context.state.todoArr.forEach((item, ...rest) => {
			expect(TodoItem).toHaveBeenCalledWith(item, ...rest);
		});
	});
});
