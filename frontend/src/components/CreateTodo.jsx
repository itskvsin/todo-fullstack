
const CreateTodo = () => {
    return (
        <div className="flex flex-col w-2/4 m-auto gap-6 items-center">
            <input className="border-2 w-full border-black outline-none p-3 rounded-lg bg-gray-200" type="text" name="title" id="title"  placeholder="Title: "/>
            <input className="border-2 w-full border-black outline-none p-3 rounded-lg bg-gray-200" type="text" name="description" id="description" placeholder="Description: "/>
            <button className="bg-black text-white w-1/4 p-2 rounded cursor-pointer">Submit</button>
        </div>
    )
}

export default CreateTodo;