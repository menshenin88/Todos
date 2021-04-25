import React, { useState } from 'react'
import './App.css';
import Main from './components/Main/Main';
import Todoapp from './components/Todoapp';

function App() {
  const [todos, setTodos] = useState([
    {
      text: "This is a sampel todo",
      isDone: false,
      edit: false,
      show: true,
      time: new Date()
    },
    {
      text: "This is todo number two",
      isDone: false,
      edit: false,
      show: true,
      time: new Date()
    },
    {
      text: "This is todo number three",
      isDone: true,
      edit: false,
      show: true,
      time: new Date()
    }
  ]
  );

  const addTodo = text => {
    const newTodo = [...todos, text ];
    setTodos(newTodo);
  };

  const delTodo = id => {
    const newTodo = [...todos];
    newTodo.splice(id, 1);
    setTodos(newTodo);
    console.log(todos)
  };

  const markTodo = id => {
    const newTodo = [...todos];
    if (newTodo[id].isDone) {
      newTodo[id].isDone = false;
      setTodos(newTodo)
    } else {
      newTodo[id].isDone = true;
      setTodos(newTodo)
    }  
  };

  const editTodo = id => {
    const newTodo = [...todos];
    if (newTodo[id].edit) {
      newTodo[id].edit = false;
      setTodos(newTodo)
    } else {
      newTodo[id].edit = true;
      setTodos(newTodo)
    }  
  }

  const reviseTodo = (id, e) => {
    const newTodo = [...todos]
    if (e.key === 'Enter'){
      newTodo[id].text = e.target.value;
      newTodo[id].edit = false;
      setTodos(newTodo)
    }
  }

  const showActive = () => {
    const newTodo = [...todos];
    newTodo.filter(i => i.isDone === true).map(i => i.show = false);
    newTodo.filter(i => i.isDone === false).map(i => i.show = true);
    setTodos(newTodo);
    console.log(newTodo)
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
    </div>
  );
}

export default App;
