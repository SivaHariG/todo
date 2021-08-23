/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-curly-spacing */
import context from '../core/context';
import React from 'react';

const todoInput = () =>
    <input
        value={context.state.input}
        onChange={(e) => context.actions.addInput(e.target.value)}
    />;

export default todoInput;
