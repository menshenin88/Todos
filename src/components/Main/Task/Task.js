import './Task.css';
import React from'react';

const task = (props) => {

    return (
        <div>
            {props.todolist.todolist.filter(i => i.show === true).map((todo, index) => (
                <li className={`${todo.isDone ? "completed" : ""}` + " " + `${todo.edit ? "editing" : ""}`} key={index}>
                    <div className="view">
                    <input className="toggle" type="checkbox" defaultChecked={todo.isDone? true: false} onClick={() => props.todolist.markTodo(index)} />
                    <label>
                        <span className="description">{todo.text}</span>
                        <span className="created">created {Math.abs((new Date().getTime() - todo.time.getTime()) / 1000)} seconds ago</span>
                    </label>
                    <button className="icon icon-edit" onClick={() => props.todolist.editTodo(index)}></button>
                    <button className="icon icon-destroy" onClick={() => props.todolist.delTodo(index)}></button>
                    </div>
                    {todo.edit
                        ? <input type="text" className="edit" onKeyDown={(event) => props.todolist.reviseTodo(index, event)} defaultValue={todo.text}/>
                        : void 0
                    }
                </li>
            ))}
        </div>
    )
};

export default task;