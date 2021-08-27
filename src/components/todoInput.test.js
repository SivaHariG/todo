import context from '../core/context';
import todoInput from './todoInput';
import { render, fireEvent } from '@testing-library/react';

jest.mock('../core/context', () => ({
	state: { input: 'input' },
	actions: { addInput: jest.fn('text') },
}));
describe('todo Input', () => {
	const { actions } = context;

	test('render Input in DOM', () => {
		const component = render(todoInput()).getByRole('todoInput');

		expect(component).toBeInTheDocument();
	});

	test(' onChange Event', () => {
		jest.spyOn(actions, 'addInput');

		const component = render(todoInput()).getByRole('todoInput');

		fireEvent.change(component, { target: { value: 'ab' }});
		expect(actions.addInput).toHaveBeenCalledWith('ab');
	});
});
