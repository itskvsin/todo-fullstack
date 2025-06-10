import { useEffect, useState } from "react";

import CreateTodo from "./components/createTodo";
import Todos from "./components/Todos";

const App = () => {

  const [ todos , setTodos ] = useState([]);


useEffect(() => {
        fetch("http://localhost:3000/todos")
    .then(async function(res) {
      const json = await res.json()
      setTodos (json.todos);
    })
} ,[])


  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  )
}

export default App;