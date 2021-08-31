import { map } from '@laufire/utils/collection';
import Actions from './actions';
import todoManager from '../services/todoManager';

// eslint-disable-next-line max-lines-per-function
describe('action test', () => {
	const context = {
		state: {
			todoArr: Symbol('state'),
			editing: Symbol('edit'),
			input: Symbol('input'),
		},
		data: Symbol('context'),
	};
	const returned = Symbol('returned');
	const testProxy = ({ mock, impactedKey, action }) => {
		const { library, func } = mock;

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
		// editTodo: {
		// 	mock: {
		// 		library: todoManager,
		// 		func: 'updateTodo',
		// 	},
		// 	impactedKey: 'todoArr',
		// },
	};

	map(proxies, (params, action) =>
		test(action, () => testProxy({ ...params, action })));

	test('add Input Change', () => {
		const data = Symbol('text');

		const result = Actions.addInput({ data });

		expect(result).toMatchObject({ input: data });
	});

	test('edit Todo', () => {
		jest.spyOn(todoManager, 'updateTodo').mockReturnValue(returned);
		const result = Actions.editTodo(context);

		expect(todoManager.updateTodo)
			.toHaveBeenCalledWith(
				context.state.todoArr,
				context.state.editing,
				context.state.input
			);
		expect(result).toMatchObject({ editing: null });
		expect(result).toMatchObject({ input: '' });
		expect(result).toMatchObject({ todoArr: returned });
	});

	test('set Editing', () => {
		const data = { todovalue: 'text' };
		const result = Actions.setEditing({ data });

		expect(result).toMatchObject({ editing: data });
		expect(result).toMatchObject({ input: data.todoValue });
	});
});
