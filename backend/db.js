
const mongoose = require("mongoose");

// mongoose url handy 
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL);

const todoSchema = mongoose.Schema({
    title : String ,
    description : String ,
    completed : Boolean
});


const todo = mongoose.model('todos' , todoSchema);

module.exports = {
    todo
}

/**
 * {
 *  title : string,
 *  description : string,
 *  completed : boolean,
 * 
 * }
 * 
 * mongodb://localhost:27017/
 * 
 */
