/* eslint-disable indent */
// import context from "../core/context";

const toogleTodo = (todos, todoId) =>
    todos.map((todo) => (
        todo.id !== todoId
            ? todo
            : { ...todo, completed: !todo.completed }));

const removeTodo = (todos, todoId) =>
    todos.filter(({ id }) => id !== todoId);

const addTodo = (todos, todoValue) =>
    todos.concat({
        id: Date.now(),
        todoValue: todoValue,
        completed: false,
    });

const updateTodo = (todos, { todoId, todoValue }) =>
    todos.map((todo) => (
        todo.id !== todoId
            ? todo
            : { ...todo, todoValue }));

const todoManager = {
    toogleTodo,
    removeTodo,
    updateTodo,
    addTodo,
};

export default todoManager;
