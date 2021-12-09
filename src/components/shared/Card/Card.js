import React from 'react';

import "./styles.css";

export const Card = (props) => {
	const { todo } = props;
	const { text, completed } = todo;
	return <div className="Card">
		<p className={completed ? "Card-todo__completed" : "Card-todo__uncompleted"}>{text}</p>
	</div>
}