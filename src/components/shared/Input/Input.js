import React from 'react';

export const Input = (props) => {
	const { addTodo } = props;

	const handleAddTodo = () => {
		const text = document.querySelector('.Input-input').value;
		addTodo(text);
	}

	return <div className="Input">
		<label>Todo:<input className="Input-input"/></label>
		<button onClick={handleAddTodo}>Add</button>
	</div>
}