import React from 'react';
import context from '../core/context';

const EditTodo = (data) =>
	<button
		onClick={ () => {
			context.actions.setEditing(data);
		} }
	>Edit</button>;

export default EditTodo;
