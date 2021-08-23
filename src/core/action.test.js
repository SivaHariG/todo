/* eslint-disable indent */
import actions from './actions';
import todoManager from '../services/todoManager';

describe('action test', () => {
    // eslint-disable-next-line padded-blocks
    test('addToTodo', () => {
        const context = {
            state: { todoArr: Symbol('state') },
            data: Symbol('context'),
        };
        const returned = Symbol('returned');
        const library = todoManager;
        const func = 'addTodo';

        // eslint-disable-next-line max-len
        jest.spyOn(todoManager, 'addTodo').mockImplementation(() => returned);

        const result = actions.addToTodo(context);

        // eslint-disable-next-line max-len
        expect(library[func]).toHaveBeenCalledWith(context.state.todoArr, context.data);
        expect(result).toBeDefined();
        // eslint-disable-next-line no-constant-condition
        expect(result).toMatchObject({ todoArr: returned });
    });
});
