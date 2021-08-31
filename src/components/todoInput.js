import context from '../core/context';
import React from 'react';

const TodoInput = () =>
	<input
		role="todoInput"
		value={ context.state.input }
		onChange={ (e) => context.actions.addInput(e.target.value) }
	/>;

export default TodoInput;
