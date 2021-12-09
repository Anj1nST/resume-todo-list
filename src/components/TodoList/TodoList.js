import React from 'react';

import { Input, Card } from '../shared';

export const TodoList = (props) => {
	const { todos, addTodo } = props;

	return <div className="TodoList">
		<Input addTodo={addTodo} />
		{todos && todos.map(todo => {
			return <Card todo={todo} />
		})}
	</div>
}