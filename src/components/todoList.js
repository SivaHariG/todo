import React from 'react';
import context from '../core/context';
import TodoItem from './todoItem';

const TodoList = () =>
	<ol role="todoList">
		{
			context.state.todoArr.map(TodoItem)
		}
	</ol>;

export default TodoList;
