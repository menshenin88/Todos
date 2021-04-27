import './Task.css';
import React from'react';

const task = (props) => {
    const todoClass = (todo) => {
        if (todo.isDone) {
            return "completed"
        } else if (todo.edit)
            return "editing"
        else return ""
    }

    return (
        <div>
            
            {props.todolist.filter(i => i.show === true).map((todo, index) =>   
                <li className={todoClass(todo)} key={todo.id}>
                    {console.log(todo)}
                    <div className="view">
                    <input className="toggle" type="checkbox" defaultChecked={todo.isDone? true: false} onClick={() => props.markTodo(todo.id)} />
                    <label>
                        <span className="description">{todo.text}</span>
                        <span className="created">created {Math.abs((new Date().getTime() - todo.time.getTime()) / 1000)} seconds ago</span>
                    </label>
                    <button className="icon icon-edit" onClick={() => props.editTodo(todo.id)}></button>
                    <button className="icon icon-destroy" onClick={() => props.delTodo(todo.id)}></button>
                    </div>
                    {todo.edit
                        ? <input type="text" className="edit" onKeyDown={(event) => props.reviseTodo(todo.id, event)} defaultValue={todo.text}/>
                        : void 0
                    }
                </li>
            )}
        </div>
    )
};

export default task;