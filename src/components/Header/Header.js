import React, { useState } from 'react'

import './Header.css'


const Header = (props) => {
    const [enteredTodo, setEnteredTodo]=useState('');

    const todoChangeHandler = (event) => {
        setEnteredTodo(event.target.value)
    };

    const newEntryHandler = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const todoData = {
                id: Math.floor(Math.random() * 10000),
                text: enteredTodo,
                isDone: false,
                show: true,
                time: 0
            };
            props.addTodo(todoData)
            setEnteredTodo("");
        }

    }

    return (
        <div>
            <header className='header'>
                <h1>todos</h1>
                <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyDown={newEntryHandler} onChange={todoChangeHandler} value={enteredTodo}></input>
            </header>
        </div>
    )
};

export default Header;
