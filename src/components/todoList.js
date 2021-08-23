/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-curly-spacing */
import React from 'react';
import context from '../core/context';

const todoList = (props) => {
    const { isCompleted, deleteTodo } = context.actions;
    const { id, todoValue, completed } = props;

    return <li key={id}>
        <input
            id={id}
            type="checkbox"
            onChange={() => isCompleted(id)}
        />
        <label htmlFor={id}>{todoValue}</label>
        {completed && <span> completed</span>}
        <button
            onClick={() => { deleteTodo(id); }}
        >Remove
        </button>
        <button
            onClick={() => { }}
        >Edit</button>
    </li>;
};

export default todoList;
