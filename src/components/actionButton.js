import context from '../core/context';
import EditTextButton from './editTextButton';
import TodoButton from './todoButton';

const ActionButton = () => (
	context.state.editing ? EditTextButton() : TodoButton()
);

export default ActionButton;
