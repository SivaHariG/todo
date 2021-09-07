import React from 'react';
import context from '../core/context';

const EditTodo = (data) =>
	<button
		role="editTodo"
		onClick={ () => {
			context.actions.setEditing(data);
		} }
	>Edit</button>;

export default EditTodo;
