import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    username:String,
    password:String
})


export default mongoose.model("Auth", authSchema);