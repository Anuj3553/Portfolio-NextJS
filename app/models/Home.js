import mongoose from "mongoose";

const HomeSchema = new mongoose.Schema({
    heading: String,
    summary: String,
    facebook: String,
    twitter: String,
    linkedin: String,
    instagram: String,
    github: String,
},
    { timestamps: true }
)

const Home = mongoose.models.Home || mongoose.model('Home', HomeSchema)

export default Home;