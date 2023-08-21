import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function TodoItem({ todo, handleDelete, onActive }) {
	const { id, text, checked } = todo;
	return (
		<>
			<input
				id={id}
				type='checkbox'
				value={checked}
				className='checkBtn'
				onClick={() => onActive(id)}
			/>
			<label htmlFor={id} className='content'>
				{text}
			</label>
			<button className='deleteBtn' onClick={() => handleDelete(id)}>
				<FaTrashAlt />
			</button>
		</>
	);
}
