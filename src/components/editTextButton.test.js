import { fireEvent, render } from '@testing-library/react';
import context from '../core/context';
import EditTextButton from './editTextButton';

jest.mock('../core/context', () => ({
	actions: {
		editTodo: jest.fn(),
	},
}));

describe('Edit Todo texts', () => {
	const { actions } = context;

	test('render dom', () => {
		const component = render(EditTextButton()).getByRole('EditTextButton');

		expect(component).toBeInTheDocument();
	});
	test('fire Event', () => {
		jest.spyOn(actions, 'editTodo');
		const component = render(EditTextButton()).getByRole('EditTextButton');

		fireEvent.click(component);
		expect(actions.editTodo).toHaveBeenCalledWith();
	});
});
