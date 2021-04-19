

import './Main.css';

const Main = (props) => {


    return (
        <div>
            <section className="main">
                <ul className="todo-list">
                    {props.todolist.map((todo, index) => (
                        <li className={`${todo.isDone ? "completed" : ""}`} key={index}>
                            <div className="view">
                            <input className="toggle" type="checkbox"/>
                            <label>
                                <span className="description">{todo.text}</span>
                                <span className="created">created 5 minutes ago</span>
                            </label>
                            <button className="icon icon-edit" onClick={() => props.markTodo(index)}></button>
                            <button className="icon icon-destroy" onClick={() => props.delTodo(index)}></button>
                            </div>
                        </li>
                    ))
                    }
                    <li className="editing">
                        <div className="view">
                        <input className="toggle" type="checkbox"/>
                        <label>
                            <span className="description">Editing task</span>
                            <span className="created">created 5 minutes ago</span>
                        </label>
                        <button className="icon icon-edit"></button>
                        <button className="icon icon-destroy"></button>
                        </div>
                        <input type="text" className="edit" placeholder="Editing task"/>
                    </li>
                    <li>
                        <div className="view">
                        <input className="toggle" type="checkbox"/>
                        <label>
                            <span className="description">Active task</span>
                            <span className="created">created 5 minutes ago</span>
                        </label>
                        <button className="icon icon-edit"></button>
                        <button className="icon icon-destroy"></button>
                        </div>
                    </li>
                </ul>
                <footer className="footer">
                    <span className="todo-count">{props.todolist.filter(i => i.isDone === false).length} items left</span>
                    <ul className="filters">
                        <li>
                            <button className="selected">All</button>
                        </li>
                        <li>
                            <button>Active</button>
                        </li>
                        <li>
                            <button>Completed</button>
                        </li>
                    </ul>
                    <button className="clear-completed">Clear completed</button>
                </footer>
            </section>
        </div>

    )
}

export default Main;