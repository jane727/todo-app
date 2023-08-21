import React from 'react';
import { BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs';

export default function TodoHead() {
    return (
        <div className='header'>
            <button className='toggle-mode'><BsSunFill /></button>
            <div className='category'>
                <button>All</button>
                <button>active</button>
                <button>completed</button>
            </div>
        </div>
    );
}

