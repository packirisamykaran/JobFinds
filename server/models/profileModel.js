import mongoose from "mongoose";


const schema = mongoose.Schema({
    username:String,
    firstName:String,
    lastName:String,
    dateOfBirth:Date,
    profession:String,
    experience:[Object],
    qualification:[Object],
    language:[Object],
    certification:[Object],
    skills: [String],
    industry:String,
    expectedPay:String,
    country:String,
    // profilePic:Buffer,
    bio:String
})


export default mongoose.model("Profile", schema);
