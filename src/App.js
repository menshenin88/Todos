import React, { useState } from 'react'
import './App.css';
import Main from './components/Main/Main';
import Todoapp from './components/Todoapp';

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sampe todo",
      isDone: false
    },
    {
      text: "This is todo number two",
      isDone: false
    },
    {
      text: "This is todo number three",
      isDone: true
    }
  ]
  );

  const addTodo = text => {
    const newTodo = [...todos, { text }];
    setTodos(newTodo);
  };

  const delTodo = id => {
    const newTodo = [...todos];
    newTodo.splice(id, 1);
    setTodos(newTodo);
  };

  const markTodo = id => {
    const newTodo = [...todos];
    newTodo[id].isDone = true;
    setTodos(newTodo)
  };

  return (
    <div className="todoapp">
      <Todoapp addTodo={addTodo}/>
      <Main todolist={todos} addTodo={addTodo} delTodo={delTodo} markTodo={markTodo}/>
    </div>
  );
}

export default App;
