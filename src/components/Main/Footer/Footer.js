import React, { useState } from 'react'
import './Footer.css'


const Footer = (props) => {
    const [button, setButton] = useState('All')

    const showActive = () => {
        props.showActive()
        setButton('Active')
    }

    const showAll = () => {
        props.showAll()
        setButton('All')
    };

    const showCompleted = () => {
        props.showCompleted()
        setButton('Completed')
    };

    const clearCompleted = () => {
        props.clearCompleted()
    };

    return (
        <footer className="footer">
            <span className="todo-count">{props.todolist.filter(i => i.isDone === false).length} items left</span>
            <ul className="filters">
                <li>
                    <button onClick={showAll} className={button == 'All'? "selected": ""}>All</button>
                </li>
                <li>
                    <button onClick={showActive} className={button == 'Active'? "selected": ""}>Active</button>
                </li>
                <li>
                    <button onClick={showCompleted} className={button == 'Completed'? "selected": ""}>Completed</button>
                </li>
            </ul>
            <button onClick={clearCompleted} className="clear-completed">Clear completed</button>
        </footer>
    )
};

export default Footer;