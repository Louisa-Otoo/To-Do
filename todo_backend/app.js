import express from "express";
import morgan from "morgan";
import connectDB from "./db.js";
import todoRoute from "./router/todoRoutes.js"
import dotenv from "dotenv"
dotenv.config()


const app = express();
const PORT = process.env.PORT;


app.use(morgan('dev'));
app.use(express.json());
app.use('/api/tasks', todoRoute)


app.listen(PORT, () => {
    connectDB()
    console.log(`server started on port ${PORT}`)
})
