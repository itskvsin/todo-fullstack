import axios from "axios";
import { useEffect, useState } from "react";

const Todos = ({ todos }) => {
  const [completedTodos, setCompletedTodos] = useState(new Set());

  const markAsCompleted = async (todoId) => {
    try {
      setCompletedTodos((prev) => new Set([...prev, todoId]));
      await axios.put(
        "http://localhost:3000/completed",
        {
          id: todoId,
          completed: true,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // refreshTodos();
      // console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {todos.map((todo) => {
        const { _id, title, description, completed } = todo;
        const isCompleted = completed || completedTodos.has(_id);
        return (
          <div className="p-8 mt-6 mx-10 bg-gray-950 text-white flex justify-between items-center rounded-xl">
            <div>
              <h1 className="mx-2 font-bold text-2xl">{title}</h1>
              <p className="mx-2 text-lg">{description}</p>
            </div>
            <div>
              <button
                disabled={isCompleted}
                onClick={() => {
                  markAsCompleted(_id);
                }}
                className="bg-green-200 p-2 rounded font-semibold text-black cursor-pointer"
              >
                {isCompleted === true ? "Completed" : "Mark As Complete"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
