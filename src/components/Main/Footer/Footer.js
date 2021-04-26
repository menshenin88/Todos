import './Footer.css'

const Footer = (props) => {
    const showActive = () => {
        props.showActive()
    }

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
        <footer className="footer">
            <span className="todo-count">{props.todolist.filter(i => i.isDone === false).length} items left</span>
            <ul className="filters">
                <li>
                    <button onClick={showAll} className="selected">All</button>
                </li>
                <li>
                    <button onClick={showActive}>Active</button>
                </li>
                <li>
                    <button onClick={showCompleted}>Completed</button>
                </li>
            </ul>
            <button onClick={clearCompleted} className="clear-completed">Clear completed</button>
        </footer>
    )
};

export default Footer;