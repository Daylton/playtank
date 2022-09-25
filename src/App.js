import "./App.css";
import { db } from "./firebase";
import { uid } from "uid";
import { set, ref } from "firebase/database";
import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("");

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      todo,
      uuid,
    });

    setTodo("");
  };

  return (
    <div className="App">
      <input type="text" value={todo} onChange={handleTodoChange} />
      <button onClick={writeToDatabase}>Enviar</button>
    </div>
  );
}

export default App;
