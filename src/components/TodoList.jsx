import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, handleDelete, onActive }) {
	return (
		<ul className='todo-list'>
			{todos.map((todo) => (
				<li key={todo.id}>
					<TodoItem todo={todo} handleDelete={handleDelete} onActive={onActive} />
				</li>
			))}
		</ul>
	);
}
