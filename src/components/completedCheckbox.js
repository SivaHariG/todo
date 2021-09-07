import React from 'react';
import InputCheckbox from './inputCheckbox';
const CompletedCheckbox = (props) => {
	const { id, todoValue, completed } = props;

	return (
		<div role="CompletedCheckbox">
			{InputCheckbox()}
			<label htmlFor={ id }>{todoValue}</label>
			{completed && <span> completed</span>}
		</div>);
};

export default CompletedCheckbox;
