import express from "express";
import cors from "cors"
import morgan from "morgan";
import connectDB from "./db.js";
// import todoRoute from "./router/todoRoutes.js"
import todoRoute from "./router/todoRoutes.js"
import dotenv from "dotenv"
dotenv.config()


const app = express();
const PORT = process.env.PORT;


app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
// app.use('/api/tasks', todoRoute)
app.use('/api/todos', todoRoute)


app.listen(PORT, () => {
    connectDB()
    console.log(`server started on port ${PORT}`)
})


// import express from "express";
// import cors from "cors";
// import morgan from "morgan";
// import connectDB from "./db.js";
// import todoRoute from "./router/todoRoutes.js";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT;

// // Middleware setup
// app.use(cors());
// app.use(morgan('combined'));
// app.use(express.json()); // Body parser for JSON data
// app.use(express.urlencoded({ extended: true })); // Body parser for URL-encoded data

// // Connect to MongoDB
// connectDB();

// // Routes
// app.use('/api/tasks', todoRoute);

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server started on port ${PORT}`);
// });
