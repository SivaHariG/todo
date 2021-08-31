import React from 'react';
import context from '../core/context';

const EditTextButton = () =>
	<button
		onClick={ () => { context.actions.editTodo(); } }
	>
		Edit Text
	</button>;

export default EditTextButton;
