import todoItem from './todoItem';
import { render } from '@testing-library/react';
import * as CompletedCheckbox from './completedCheckbox';
import * as EditTodo from './editTodo';
import * as RemoveTodo from './removeTodo';

// eslint-disable-next-line max-lines-per-function
describe('Todo Item', () => {
	const todo = { id: 'str' };

	test('component in dom', () => {
		const components = render(todoItem(todo))
			.getAllByRole('todoItem');

		components.forEach((component) => {
			expect(component).toBeInTheDocument();
		});
	});

	test('test function call', () => {
		jest.spyOn(CompletedCheckbox, 'default');
		jest.spyOn(EditTodo, 'default');
		jest.spyOn(RemoveTodo, 'default');

		const components = render(todoItem(todo))
			.getAllByRole('todoItem');

		components.forEach((component) => {
			expect(component).toBeInTheDocument();
		});

		expect(CompletedCheckbox.default).toHaveBeenCalledWith(todo);
		expect(RemoveTodo.default).toHaveBeenCalledWith(todo.id);
		expect(EditTodo.default).toHaveBeenCalledWith(todo);
	});
});
