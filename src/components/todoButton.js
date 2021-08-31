import React from 'react';
import context from '../core/context';

const TodoButton = () =>
	<button
		role="todoButton"
		onClick={ () => {
			context.actions.addToTodo(context.state.input);
		} }
	>
		Add Text
	</button>;

export default TodoButton;
