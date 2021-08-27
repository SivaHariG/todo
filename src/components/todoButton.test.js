import todoButton from './todoButton';
import context from '../core/context';
import { render, fireEvent } from '@testing-library/react';

jest.mock('../core/context', () => ({
	state:	{ input: Symbol('input') },
	actions: { addToTodo: jest.fn() },
}));
describe('todo button ', () => {
	const { actions } = context;

	test('button render Test', () => {
		const component = render(todoButton()).getByRole('todoButton');

		expect(component).toBeInTheDocument();
	});

	test.only('click event ', () => {
		jest.spyOn(actions, 'addToTodo');

		const component = render(todoButton()).getByRole('todoButton');

		fireEvent.click(component);

		expect(actions.addToTodo)
			.toHaveBeenCalledWith(context.state.input);
	});
});
