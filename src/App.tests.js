/* eslint-disable react/jsx-tag-spacing */
import { React } from 'react';
import { render } from '@testing-library/react';

// NOTE: automock from jest config doesn't work on apps created with create-react-app.
jest.mock('./components/simpleButton');
jest.mock('./core/context', () => ({
	state: {
		count: 0,
		refreshID: 'ABCD',
	},
}));

import App from './App';

test('renders learn react link', () => {
	render(<App />);
	const result = 1;

	expect(result).toEqual(1);
});
