import RemoveTodo from './removeTodo';
import { fireEvent, render } from '@testing-library/react';
import context from '../core/context';

jest.mock('../core/context', () => ({
	actions: { deleteTodo: jest.fn() },
}));
describe(' Remove Button', () => {
	const { actions } = context;

	test('render in Dom', () => {
		const component = render(RemoveTodo()).getByRole('removeButton');

		expect(component).toBeInTheDocument();
	});

	test('click event', () => {
		jest.spyOn(actions, 'deleteTodo');
		const id = Symbol('id');
		const component = render(RemoveTodo(id)).getByRole('removeButton');

		fireEvent.click(component);
		expect(actions.deleteTodo).toHaveBeenCalledWith(id);
	});
});
