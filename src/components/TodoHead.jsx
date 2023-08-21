import React, { useContext } from 'react';
import { BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { DarkModeContext } from '../context/DarkModeContext';

export default function TodoHead({ todos }) {
	const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
	return (
		<div className='header'>
			<button className='toggle-mode' onClick={() => toggleDarkMode()}>
				{darkMode ? <BsSunFill /> : <BsFillMoonStarsFill />}
			</button>
			<div className='category'>
				<button>All</button>
				<button>Active</button>
				<button>completed</button>
			</div>
		</div>
	);
}
