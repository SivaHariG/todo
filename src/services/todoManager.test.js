/* eslint-disable indent */
import todoManager from './todoManager';

describe('todo Manager', () => {
    const { addTodo } = todoManager;

    test('add todo', () => {
        const todos = [];
        const todo = Symbol('text');

        const result = addTodo(todos, todo);

        expect(result).toHaveLength(1);
        expect(result[0].todoValue).toBe(todo);
    });
});
