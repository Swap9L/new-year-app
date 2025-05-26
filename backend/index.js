const { createTodo, updateTodo } = require( "./types");
const { todo } = require( "./db");
const express = require('express');
const mongoose = require('mongoose');


const app = express();

app.use(express.json());

app.post("/todo", async function(req, res){
    const todoinfo = req.body;
    const safeTodoinfo = createTodo.safeParse(todoinfo);
    
    if(!safeTodoinfo.success){
        res.status(411).json({msg: "invalid inputs, please verify your inputs."})
        return;
    }

    //db call
    await todo.create({
        title : todoinfo.title,
        description : todoinfo.description,
        completed: todoinfo.completed
    })

    res.json({
        msg : "todo created."
    })

})

app.get( "/todos",async function(req, res){
    const todos = await todo.find({})
    res.json({
        todos
    })
} )


app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({msg: "in-valide input, please verify your input."})
        return;
    }

    const id = parsedPayload.data.id;

    await todo.updateOne({
        _id : new mongoose.Types.ObjectId(id)
    },{
        completed: true
    })
    res.json({
        msg: "todo updated. "
    })

})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});