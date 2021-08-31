import React from 'react';
import context from '../core/context';

const CompletedCheckbox = (props) => {
	const { id, todoValue, completed } = props;

	return (
		<div>
			<input
				id={ id }
				type="checkbox"
				onChange={ () => context.actions.isCompleted(id) }
			/>
			<label htmlFor={ id }>{todoValue}</label>
			{completed && <span> completed</span>}
		</div>);
};

export default CompletedCheckbox;
