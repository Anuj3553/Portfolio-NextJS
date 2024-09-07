import mongoose from "mongoose";

export default async function connectToDB(params) {
    try{
        await mongoose.connect('mongodb+srv://anujverma3553:Anuj3553@cluster0.ihnhz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log("Database connected successfully")
    }
    catch(e){
        console.log(e)
    }
}