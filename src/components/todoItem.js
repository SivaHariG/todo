import React from 'react';
import CompletedCheckbox from './completedCheckbox';
import EditTodo from './editTodo';
import RemoveTodo from './removeTodo';

const TodoItem = (todo) => {
	const { id } = todo;

	return <li key={ id } role="todoItem">
		{CompletedCheckbox(todo)}
		{RemoveTodo(id)}
		{EditTodo(todo)}
	</li>;
};

export default TodoItem;
