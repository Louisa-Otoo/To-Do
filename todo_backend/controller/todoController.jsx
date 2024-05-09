import todo from "../model/todoModel.js";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";

export const addTask = asyncHandler( async(req, res) => {
    const { action, completed } = req.body;

    console.log('Request body:', req.body)

    if (!action) {
        res.status(400).json({ error: 'action is required' })
    }

    const newTask = await todo.create({
        action,
        completed
    })

    if (newTask) {
        res.status(200).send(newTask)

    } else {
        res.status(401)
        throw new Error('your new task was not created')
    }
    
})

// export const addTask = asyncHandler(async (req, res) => {
//     const { action, completed } = req.body;

//     console.log('Request Body:', req.body); // Log the request body

//     // Check if action field is missing or empty
//     if (!action || action.trim() === "") {
//         return res.status(400).json({ error: 'Action is required' });
//     }

//     // You can add more validation for other fields if needed

//     try {
//         const newTask = await todo.create({
//             action,
//             completed
//         });

//         res.status(201).send(newTask);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Server error' });
//     }
// });


export const allTasks = asyncHandler( async(req,res) => {
    const tasks = await todo.find();

    if (!tasks || tasks.length === 0) {
        res.status(400).json({ error: 'your tasks were not found' })
    
    } else {
        res.status(200).send(tasks)
    }
})


export const updateTask = asyncHandler( async(req, res) => {
    const { id } = req.params;
    const { description, completed } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ error: 'Invalid ID' });
    }

    const editedTask = req.body;
    const updatedTask = await todo.findByIdAndUpdate(
        { _id: id },
        editedTask,
    )

    if (updatedTask) {
        res.status(200).send(updatedTask)
    } else {
        res.status(404)
        throw new Error('task not found')
    }

})


export const deleteTask = asyncHandler( async(req, res) => {
    const { id } = req.params;

    const removedTask = await todo.findByIdAndDelete(
        { _id: id }
    )

    if (removedTask) {
        res.status(200).send(removedTask)

    } else {
        res.status(400)
        throw new Error('task could not be deleted')
    }
})