import Task from './Task/Task';
import Footer from './Footer/Footer'
import './Main.css';

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
            <section className="main">
                <ul className="todo-list">
                    <Task todolist={props}/>
                </ul>
                <Footer todolist={props} showActive={showActive} showAll={showAll} showCompleted={showCompleted} clearCompleted={clearCompleted}/>
            </section>
        </div>

    )
}

export default Main;