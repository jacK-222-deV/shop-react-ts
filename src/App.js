import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState([]);

  const clickHandler = () => {
    setTodo([...todo, { id: 1, text }]);
    setText('')
  };

  return (
    <div className="App">
      <div>
        <input onChange={(e) => setText(e.target.value)} />
      </div>
      <button onClick={clickHandler}>add</button>
      {todo.map((i) => (
        <div key={i.id}>{i.text}</div>
      ))}
    </div>
  );
}

export default App;
