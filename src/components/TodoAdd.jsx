import React from 'react';

export default function TodoAdd() {
    return (
        <div className='todo-add'>
            <input type='text' placeholder='Add Todo' />
            <button className='addBtn'>Add</button>
        </div>
    );
}

