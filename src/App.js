import { React, useEffect } from 'react';
// import './App.scss';
import SampleService from './services/sample';
import context from './core/context';

import TodoInput from './components/todoInput';
import TodoList from './components/todoList';
import ActionButton from './components/actionButton';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<div className="App">
			{TodoInput()}
			<div>{context.state.input}</div>
			{TodoList()}
			{ActionButton()}
		</div>
	);
};

export default App;
