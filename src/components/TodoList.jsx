import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function TodoList() {
    return (
        <ul className='todo-list'>
            <li>
                <input id='check' type='checkbox' className='checkBtn'/>
                <label htmlFor='check' className='content'>강의 보기</label>
                <button className='deleteBtn'><FaTrashAlt /></button>
            </li>
        </ul>
    );
}