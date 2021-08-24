/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-curly-spacing */

import React from 'react';
import context from '../core/context';

const todoButton = () =>
    <button
        onClick={() => {
            // eslint-disable-next-line no-unused-expressions
            context.actions.addToTodo(context.state.input);
        }}
    >
        Add Text
    </button>;

export default todoButton;
