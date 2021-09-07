import { render } from '@testing-library/react';
// import context from '../core/context';
import CompletedCheckbox from './completedCheckbox';

jest.mock('../core/context', () => ({
	actions: {
		isCompleted: jest.fn(),
	},
}));

describe('Edit Todo texts', () => {
	// const { actions } = context;

	const props = Symbol('text');

	test('render dom', () => {
		const component = render(CompletedCheckbox(props))
			.getByRole('CompletedCheckbox');

		expect(component).toBeInTheDocument();
	});
	// test('fire Event', () => {
	// 	jest.spyOn(actions, 'editTodo');
	// 	const component = render(CompletedCheckbox())
	// 		.getByRole('EditTextButton');

	// 	fireEvent.click(component);
	// 	expect(actions.isCompleted).toHaveBeenCalledWith(id);
	// });
});
