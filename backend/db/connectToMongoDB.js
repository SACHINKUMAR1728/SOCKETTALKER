import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        // console.log(process.env.MONGO_URI);
        await mongoose.connect("mongodb://127.0.0.1:27017/chatapp");
        console.log(" Connected to MongoDB 🌿 ");

    } catch (error) {
        console.log("Error connecting to MongoDB",error.message);
    }
}

export default connectToMongoDB;