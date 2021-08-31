/* eslint-disable max-lines-per-function */

import todoManager from './todoManager';

describe('todo Manager', () => {
	const { addTodo, toogleTodo, removeTodo, updateTodo } = todoManager;
	const contextId = Symbol('id');
	const todos = [
		{
			id: contextId,
			todoValue: 'text 2',
			completed: false,
		},
		{
			id: Date.now(),
			todoValue: 'text 1',
			completed: false,
		},
	];

	test('add todo', () => {
		const todo = Symbol('text');
		const result = addTodo(todos, todo);

		// eslint-disable-next-line no-magic-numbers
		expect(result).toHaveLength(3);
		expect(result[2].todoValue).toBe(todo);
	});
	test('toogle add', () => {
		const result = toogleTodo(todos, contextId);

		expect(result[0].completed).toBeTruthy();
	});
	test('remove todo', () => {
		const result = removeTodo(todos, contextId);

		expect(result).toHaveLength(1);
	});
	test('update Todo', () => {
		const result = updateTodo(
			todos,
			{ id: contextId }, 'todoValue'
		);

		expect(result[0].todoValue).toBe('todoValue');
	});
});
