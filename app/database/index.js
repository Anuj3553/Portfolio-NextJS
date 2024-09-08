import mongoose from "mongoose";
require('dotenv').config();
const URI = process.env.MONGODB_URI;

export default async function connectToDB() {
    try {
        await mongoose.connect(URI)
        console.log("Database connected successfully")
    }
    catch (e) {
        console.log(e)
    }
}