//Write baisc boilerplate code for the backend

//write basic express server

const express = require("express");
const app = express();

app.use(express.json());

app.post("/todo" , (req,res) => {

})
app.get("/todos" , (req,res) => {
    res.send("This is todo application backend");
})

app.put("/completed" , (req,res) => {
    
})

app.listen(3000);