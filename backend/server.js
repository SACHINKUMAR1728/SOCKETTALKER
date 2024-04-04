
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import cors from 'cors';
dotenv.config();

import connectDB from './db/connectToMongoDB.js';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import userRoutes from './routes/user.route.js';


const PORT = process.env.PORT ;
const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:5173'}));

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/user", userRoutes);


app.get("/", (req,res)=>{
    res.send('API is running');
});


app.listen(PORT,  ()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})