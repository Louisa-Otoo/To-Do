import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import todo from "../model/todoModel.js";

export const addTask = asyncHandler( async(req, res) => {
    const { action } = req.body;

    console.log('Request body:', req.body)

    if (!action) {
        res.status(400).json({ error: 'action is a required field'})
    }

    const newTask = await todo.create({
        action
    })

    if (newTask) {
        res.status(200).send(newTask)
    } else {
        res.status(400)
        throw new Error('task was not created')        
    }

})
