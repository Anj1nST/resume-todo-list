import { connect } from 'react-redux';

import { TodoList } from "../../components/TodoList";

import { addTodo } from "../../redux/actions/todo";

function mapStateToProps(state) {
	return {
		todos: state.todos
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addTodo: (text) => {
			dispatch(addTodo(text));
		}
	}
}

export const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);