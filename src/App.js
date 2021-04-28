import React, { useState, useEffect } from 'react'
import './App.css';
import Main from './components/Main/Main';
import Todoapp from './components/Todoapp';

function App() {


  const [todos, setTodos] = useState([
    {
      id:1,
      text: "This is a sampel todo",
      isDone: false,
      edit: false,
      show: true,
      time: 0
    },
    {
      id:2,
      text: "This is todo number two",
      isDone: false,
      edit: false,
      show: true,
      time: 0
    },
    {
      id:3,
      text: "This is todo number three",
      isDone: true,
      edit: false,
      show: true,
      time: 0
    }
  ]
  );

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSeconds(seconds +1);
    }, 1000);
    //return clearInterval(interval);
  }, [seconds]
  )
  console.log(seconds)

  const addTodo = text => {
    const newTodo = [...todos, text ];
    setTodos(newTodo);
  };

  const delTodo = id => {
    const newTodo = todos;
    const todoList = newTodo.filter(i => i.id !== id);
    setTodos(todoList);
  };

  const markTodo = id => {
    const marked = todos.map(i => {
      if ((i.id === id) && (i.isDone === false)) {i.isDone = true}
      else if ((i.id === id) && (i.isDone === true)) {i.isDone = false}
      return i
    });
    setTodos(marked)
  }

  const editTodo = id => {
    const edited = todos.map(i => {
      if (i.id === id) {i.edit = true}
      return i
    });
    setTodos(edited)
  };

  const reviseTodo = (id, e) => {
    if (e.key === 'Enter'){
      const revisedNew = todos.map(i => {if(i.id === id){
        i.text=e.target.value;
        i.edit=false;
      } return i})
      setTodos(revisedNew)
    }
  };

  const showActive = () => {
    const newTodo = [...todos];
    newTodo.filter(i => i.isDone === true).map(i => i.show = false);
    newTodo.filter(i => i.isDone === false).map(i => i.show = true);
    setTodos(newTodo);
  };

  const showCompleted = () => {
    const newTodo = [...todos];
    newTodo.filter(i => i.isDone === false).map(i => i.show = false);
    newTodo.filter(i => i.isDone === true).map(i => i.show = true)
    setTodos(newTodo);
  };

  const showAll = () => {
    const newTodo = [...todos];
    newTodo.map(i => i.show = true)
    setTodos(newTodo)
  }

  const clearCompleted = () => {
    const newTodo = [...todos]
    const filteredTodo = newTodo.filter(i => i.isDone === false)
    setTodos(filteredTodo)
  }


  return (
    <div className="todoapp">
      <Todoapp addTodo={addTodo}/>
      <Main 
        todolist={todos} 
        addTodo={addTodo} 
        delTodo={delTodo} 
        markTodo={markTodo} 
        editTodo={editTodo} 
        reviseTodo={reviseTodo}
        showActive={showActive}
        showCompleted={showCompleted}
        showAll={showAll}
        clearCompleted={clearCompleted}
      />
      <span>{seconds}</span>
    </div>
  );
}

export default App;
