import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const mongoUrl = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(mongoUrl)

        if (connection) {
            console.log('successfully connected to mongoDB')
        }
    } catch (error) {
        console.log(error)
    }
    
}


export default connectDB;


// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config()

// const mongoUrl = process.env.MONGO_URI;

// const connectDB = async () => {
//     try {
//         const connection = await mongoose.connect(mongoUrl, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });

//         if (connection) {
//             console.log('Successfully connected to MongoDB');
//         }
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//     }
// }

// export default connectDB;

