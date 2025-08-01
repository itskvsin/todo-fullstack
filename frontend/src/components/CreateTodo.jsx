import axios from "axios";
import { useState } from "react";

const CreateTodo = ({ refreshTodos }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // http://localhost:3000/todo
      await axios.post(
        "http://localhost:3000/todo",
        {
          title: title,
          description: description,
        },
        {
          headers : {
            "content-type": "application/json",
          },
        }
      );
      alert("Todo Added");
      // console.log(response);      

      setTitle("");
      setDescription("");

      await refreshTodos();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col w-2/4 m-auto gap-6 items-center mt-4">
      <input
        className="border-2 w-full text-xl border-black outline-none p-3 rounded-lg focus:bg-gray-100"
        type="text"
        name="title"
        id="title"
        placeholder="Title:"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        className="border-2 w-full text-xl border-black outline-none p-3 rounded-lg focus:bg-gray-200"
        type="text"
        name="description"
        id="description"
        placeholder="Description:"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button
        onClick={handleSubmit}
        className="bg-black text-white w-1/4 p-2 rounded cursor-pointer font-semibold"
      >
        Submit
      </button>
    </div>
  );
};

export default CreateTodo;
