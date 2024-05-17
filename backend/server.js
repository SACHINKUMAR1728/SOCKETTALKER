import path from 'path';
import express from 'express';
import {app, server} from './socket/socket.js';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import cors from 'cors';
dotenv.config();

import connectDB from './db/connectToMongoDB.js';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import userRoutes from './routes/user.route.js';


const PORT = 5000  ;


const __dirname = path.resolve();
app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:5000'}));

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/user", userRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/dist/index.html'));
  }
);


app.get("/", (req,res)=>{
    res.send('API is running');
});

// const Host = 'http://localhost:5000'
server.listen(PORT, async ()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})