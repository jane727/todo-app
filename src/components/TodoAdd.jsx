import React, { useEffect, useRef, useState } from 'react';

export default function TodoAdd(props) {
	const [content, setContent] = useState('');
	const ref = useRef();

	const handleChange = (e) => {
		setContent(e.target.value);
	};
	const handleKeyDown = (e) => {
		if (e.key === 'enter') {
			handleSubmit();
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!content) return;
		props.onSubmit(content);
		setContent('');
	};

	useEffect(() => {
		ref.current.focus();
	}, []);

	return (
		<form className='todo-add'>
			<input
				ref={ref}
				type='text'
				name='text'
				value={content}
				onChange={handleChange}
				placeholder='Add Todo'
			/>
			<button className='addBtn' onClick={handleSubmit} onKeyDown={handleKeyDown}>
				Add
			</button>
		</form>
	);
}
