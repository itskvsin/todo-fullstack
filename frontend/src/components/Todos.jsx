/*


*/

import { useEffect } from "react";

const Todos = ({ todos }) => {

    const complete = () => {
        
    }




  return (
    <div>
      {todos.map((todo) => {
        const { title , description } = todo;
        return (
          <div className="p-8 mt-6 mx-10 bg-gray-950 text-white flex justify-between items-center rounded-xl">
            <div>
              <h1 className="mx-2 font-bold text-2xl">{title}</h1>
              <p className="mx-2 text-lg">
                {description}
              </p>
            </div>
            <div>
              <button onClick={() => {
                   
        fetch("http://localhost:3000/completed" , {
            method : "PUT",
            body : {
                id : _id,
                completed : true
            } , 
            headers : {
                "content-type" : "application/json"
            }
        })
            .then(async (res) => {
                const json = await res.json();
                alert("Task Completed");
            })
              }} className="bg-green-200 p-2 rounded font-semibold text-black cursor-pointer">
                {todo.completed === true ? "Completed" : "Mark As Complete"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
