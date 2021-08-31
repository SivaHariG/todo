import React from 'react';
import context from '../core/context';

const RemoveTodo = (id) =>
	<button
		onClick={ () => { context.actions.deleteTodo(id); } }
	>Remove
	</button>;

export default RemoveTodo;
