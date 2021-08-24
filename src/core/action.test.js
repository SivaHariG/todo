/* eslint-disable indent */
import actions from './actions';
import todoManager from '../services/todoManager';

describe('action test', () => {
    test('addToTodo', () => {
        const context = {
            state: { todoArr: Symbol('state') },
            data: Symbol('context'),
        };
        const returned = Symbol('returned');
        const library = todoManager;
        const func = 'addTodo';

        jest.spyOn(todoManager, 'addTodo').mockImplementation(() => returned);

        const result = actions.addToTodo(context);

        expect(library[func])
            .toHaveBeenCalledWith(context.state.todoArr, context.data);
        expect(result).toBeDefined();
        expect(result).toMatchObject({ todoArr: returned });
    });
    // test('Edit todo', () => {
    // });
});
