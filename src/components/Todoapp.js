import React from 'react';
import './Todoapp.css';
import Header from './Header/Header';

const Todoapp = (props) => {
    const saveEntryHandler = (enteredData) => {
        const data=Object.values(enteredData.text)
        props.addTodo(data);
        console.log(enteredData.text);
        console.log(data);
    }

    return(
        <section className="todoapp">
            <Header addElement={saveEntryHandler}/>
        </section>
    )
};

export default Todoapp;