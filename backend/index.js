//Write baisc boilerplate code for the backend

//write basic express server

const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors")
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
    origin : "http://localhost:5173/"
}))

app.post("/todo" , async (req,res) => {
    const createPayload  = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(404).json({
            msg : "You sent the wrong input",
        })
        return;
    }

    //put it in mongoDB
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })

    res.json({
        msg : "Todo Created",
    })
})
app.get("/todos" , async (req,res) => {
    const todos = await todo.find();

    res.json({
        todos
    })
})

app.put("/completed" , async (req,res) => {
    if (!parsedPayload) {
        res.status(404).json({
            msg : "You sent the wrong input",
        })
        return;
    }

    //Update it in MongoDB
    await todo.update({
        _id : req.body.id
    } , {
        completed : true,
    })

    res.json({
        msg : "Your todo is marked completed",
    })


})

app.listen(port);