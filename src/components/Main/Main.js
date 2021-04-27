import Task from './Task/Task';
import Footer from './Footer/Footer'
import './Main.css';
import { useState } from 'react';

const Main = (props) => {
    const showActive = () => {
        props.showActive()
    };

    const showAll = () => {
        props.showAll()
    };

    const showCompleted = () => {
        props.showCompleted()
    };

    const clearCompleted = () => {
        props.clearCompleted()
    };


    return (
        <div>
            {console.log(props)}
            <section className="main">
                <ul className="todo-list">
                    <Task todolist={props.todolist} editTodo={props.editTodo} delTodo={props.delTodo} reviseTodo={props.reviseTodo} markTodo={props.markTodo}/>
                </ul>
                <Footer todolist={props.todolist} showActive={showActive} showAll={showAll} showCompleted={showCompleted} clearCompleted={clearCompleted}/>
            </section>
        </div>

    )
}

export default Main;