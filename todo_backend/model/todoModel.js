import { Schema, model } from "mongoose";

const todoSchema = new Schema ({
    action: {
        type: String,
        required: true
    }
})

const todo = model('todo', todoSchema);

export default todo;