import { fireEvent, render } from '@testing-library/react';
import context from '../core/context';
import EditTodo from './editTodo';

jest.mock('../core/context', () => ({
	actions: {
		setEditing: jest.fn(),
	},
}));

describe('Edit Todo', () => {
	const { actions } = context;

	test('render dom', () => {
		const component = render(EditTodo()).getByRole('editTodo');

		expect(component).toBeInTheDocument();
	});
	test('fire Event', () => {
		const data = Symbol('data');

		jest.spyOn(actions, 'setEditing');
		const component = render(EditTodo(data)).getByRole('editTodo');

		fireEvent.click(component);
		expect(actions.setEditing).toHaveBeenCalledWith(data);
	});
});
