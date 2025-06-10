import { useEffect, useState } from "react";

import CreateTodo from "./components/createTodo";
import Todos from "./components/Todos";

const App = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:3000/todos");
    const data = await response.json();
    setTodos(data.todos);
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div>
      <CreateTodo refreshTodos={fetchTodos} />
      <Todos todos={todos} refreshTodos={fetchTodos} />
    </div>
  )
}

export default App;