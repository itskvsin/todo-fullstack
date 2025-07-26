import { useEffect, useState } from "react";
import axois from "axios";

import CreateTodo from "./components/createTodo";
import Todos from "./components/Todos";

const App = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await axois.get("http://localhost:3000/todos");
    setTodos(response.data.todos);
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