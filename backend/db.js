const mongo = require("mongoose");

mongo.connect("mongodb+srv://swap9l:zNEUGfReq28cfk8V@cluster0.bqv86ez.mongodb.net/todos");

const todoSchema = mongo.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongo.model('todos',todoSchema);

module.exports = {
    todo
}
