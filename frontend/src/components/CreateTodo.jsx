import { useState } from "react";

const CreateTodo = () => {

    const [ title , setTitle ] = useState("");
    const [ description , setDescription ] = useState("");

  return (
    <div className="flex flex-col w-2/4 m-auto gap-6 items-center">
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
        onClick={(e) => {
            e.preventDefault();
            fetch("http://localhost:3000/todo" , {
                method : "POST" , 
                body : JSON.stringify({
                    title : title,
                    description : description,
                }) , 
                headers : {
                    "content-type" : "application/json" 
                }
            })
                .then(async (res) => {
                    const json = await res.json();
                    alert("Todo Added");
                })
                
            }}
        className="bg-black text-white w-1/4 p-2 rounded cursor-pointer font-semibold"
      >
        Submit
      </button>
    </div>
  );
};

export default CreateTodo;
