import React from 'react';
import './Todoapp.css';
import Header from './Header/Header';

const Todoapp = (props) => {
    const addTodo = (enteredData) => {
        props.addTodo(enteredData);
    }

    return(
        <section className="todoapp">
            <Header addTodo={addTodo}/>
        </section>
    )
};

export default Todoapp;