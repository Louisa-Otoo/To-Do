import {Schema, model} from "mongoose"

const todoSchema = new Schema({
    action: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const todo = model('todo', todoSchema);

export default todo;