import profileModel from "../models/profileModel.js";


// Retrieve profile using username
export const getProfile = (req, res)=>{
    const data = req.body;

    const query  = profileModel.findOne({
        username: data.username
    })


}