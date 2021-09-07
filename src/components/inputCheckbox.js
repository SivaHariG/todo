import React from 'react';
import context from '../core/context';

const InputCheckbox = (id) =>
	<input
		id={ id }
		type="checkbox"
		onChange={ () => context.actions.isCompleted(id) }
	/>;

export default InputCheckbox;
