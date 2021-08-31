import todoManager from '../services/todoManager';

const addInput = ({ data }) => ({
	input: data,
});

const addToTodo = ({ state, data }) => ({
	todoArr: todoManager.addTodo(state.todoArr, data),
});

const editTodo = ({ state }) => (
	{
		input: '',
		editing: null,
		todoArr: todoManager.updateTodo(
			state.todoArr, state.editing, state.input
		),
	}
);
const setEditing = ({ data }) => ({
	editing: data,
	input: data.todoValue,
});
const isCompleted = ({ state, data }) => (
	{ todoArr: todoManager.toogleTodo(state.todoArr, data) }
);

const deleteTodo = ({ state, data }) => (
	{ todoArr: todoManager.removeTodo(state.todoArr, data) }
);

const actions = {
	editTodo,
	addInput,
	isCompleted,
	addToTodo,
	deleteTodo,
	setEditing,
};

export default actions;
