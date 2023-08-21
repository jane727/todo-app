import React, { useRef, useState } from 'react';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';
import { DarkModeProvider } from './context/DarkModeContext';

export default function TodoTemplate() {
	const [todos, setTodos] = useState([]);
	const nextId = useRef(0);
	const handleSubmit = (text) => {
		const todo = {
			id: nextId.current,
			text,
			checked: false,
		};
		setTodos([...todos, todo]);
		nextId.current += 1; // nextID 1씩 더해주기
	};
	const handleDelete = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};
	const onActive = (id) => {
		setTodos(
			todos.map((todo) => {
				return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
			})
		);
	};
	return (
		<DarkModeProvider>
			<TodoHead />
			<TodoList todos={todos} handleDelete={handleDelete} onActive={onActive} />
			<TodoAdd onSubmit={handleSubmit} />
		</DarkModeProvider>
	);
}
