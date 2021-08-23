import { React, useEffect } from 'react';
// import './App.scss';
import SampleService from './services/sample';

import todoInput from './components/todoInput';
import todoButton from './components/todoButton';
import todoList from './components/todoList';

import context from './core/context';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<div className="App">
			{todoInput()}
			<div>{context.state.input}</div>
			<ol>
				{
					context.state.todoArr.map(todoList)
				}
			</ol>
			<div>{todoButton()}</div>

		</div>
	);
};

export default App;
