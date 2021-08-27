import { map } from '@laufire/utils/collection';
import Actions from './actions';
import todoManager from '../services/todoManager';

// eslint-disable-next-line max-lines-per-function
describe('action test', () => {
	const testProxy = ({ mock, impactedKey, action }) => {
		const { library, func } = mock;
		const context = {
			state: { todoArr: Symbol('state') },
			data: Symbol('context'),
		};
		const returned = Symbol('returned');

		jest.spyOn(library, func)
			.mockReturnValue(returned);

		const result = Actions[action](context);

		expect(library[func])
			.toHaveBeenCalledWith(context.state.todoArr, context.data);
		impactedKey
			? expect(result).toMatchObject({ [impactedKey]: returned })
			: expect(result).toEqual(returned);
	};

	const proxies = {
		addToTodo: {
			mock: {
				library: todoManager,
				func: 'addTodo',
			},
			impactedKey: 'todoArr',
		},
		deleteTodo: {
			mock: {
				library: todoManager,
				func: 'removeTodo',
			},
			impactedKey: 'todoArr',
		},
		isCompleted: {
			mock: {
				library: todoManager,
				func: 'toogleTodo',
			},
			impactedKey: 'todoArr',
		},
		editTodo: {
			mock: {
				library: todoManager,
				func: 'updateTodo',
			},
			impactedKey: 'todoArr',
		},
	};

	map(proxies, (params, action) =>
		test(action, () => testProxy({ ...params, action })));

	test('add Input Change', () => {
		const data = Symbol('text');

		const result = Actions.addInput({ data });

		expect(result).toMatchObject({ input: data });
	});
});
