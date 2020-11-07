import React, {useState} from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos,setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <TodoList />
    </div>
  );
}

export default App;
