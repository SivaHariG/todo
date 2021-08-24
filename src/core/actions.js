/* eslint-disable keyword-spacing */
/* eslint-disable max-len */
/* eslint-disable no-extra-parens */
import todoManager from '../services/todoManager';

const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});

const addInput = ({ data }) => ({
	input: data,
});

const addToTodo = ({ state, data }) => ({
	todoArr: todoManager.addTodo(state.todoArr, data),
});

const editTodo = ({ state, data }) => (
	{
		todoArr: todoManager.updateTodo(state.todoArr, data),
	}
);
const isCompleted = ({ state, data }) => ({ todoArr: todoManager.toogleTodo(state.todoArr, data) });

const deleteTodo = ({ state, data }) => ({ todoArr: todoManager.removeTodo(state.todoArr, data) });

const actions = {
	increaseCount,
	editTodo,
	addInput,
	isCompleted,
	addToTodo,
	deleteTodo,
};

export default actions;
