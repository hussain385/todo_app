import React, {useState} from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(['go for walk']);
  const [input, setinput] = useState('');
  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos,input]);
    setinput('');
  }
  return (
    <div className="App">
      <h1>hello</h1>
      <form>
      <input value = {input} onChange = {event => setinput(event.target.value)}/>
      <button type = 'submit' onClick = {addTodo}>add todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
