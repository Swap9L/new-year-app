import { createTodo, updateTodo } from "./types";
import {express} from express
const express = require("express");
const app = express();

app.use(express.json());

app.post("/todo", function(req, res){
    const todoinfo = req.body;
    const safeTodoinfo = createTodo.safeParse(todoinfo);
    
    if(!safeTodoinfo.success){
        res.status(411).json({msg: "invalide inputes, please verify your imputes."})
        return;
    }

    //db call

})

app.get( "/todos", function(res, req){

} )


app.put("/completed", function(req, req){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({msg: "in-valide input, please verify your input."})
        return;
    }

})

app.listen(3000);