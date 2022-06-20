
import authModel from "../models/authModel.js"
import profileModel from "../models/profileModel.js";

// Registers new user
export const signUp = async(req, res) =>{

    const data = req.body;

    const newSignup = new authModel({
        username: data.username,
        password: data.password
    });


    const newProfile = new profileModel({
        username: data.username,
        firstName:"packirisamy",
        lastName:"karan",
        dateOfBirth:new Date(2001, 11, 22),
        bio: "im gay",
        profession:"Web Developer",
        experience:[
            {
                company:"facebook",
                title: "developer",
                startDate: new Date(2019, 1),
                endDate: new Date(2021, 8),
                description: "i worked on the frontend and backend"
            }
        ],
        qualification:[
            {
                institution:"Ngee ann poly",
                major:"engineering",
                startDate: new Date(2017, 8),
                endDate: new Date(2021, 10)
            }
        ],
        language:[
            {
                lang:"english",
                proficiency:"Fluent"
            }
        ],
        ceritification:[
            {
                association: "Java expert",
                yearAttained: new Date(2020)
            }
        ],
        skills: [
            "python",
            "javascript",
            "reactjs"
        ],
        industry:"Information & Technology",
        expectedPay:"150",
        country:"Sinagpore",
    })

    
    try {
        await newSignup.save();
        await newProfile.save();
    } catch (error) {
        console.log(error)
    }
}


// Returns whether username is taken
export const checkUsername = async(req, res)=>{

    // Retrive sent username
    const data = req.body;
    const newusername = data.username;

    let status = false;

    // check username in auth database
    try {
        const usernameExists = await authModel.exists({username: newusername});

        if(usernameExists){
            status = true
        }

    } catch (error) {
        
        console.log(error)
    }

    
    res.send(status)
}


export const checkLoginCredentials = async(req, res) =>{
    // Retrive sent username
    const data = req.body;
    const username = data.username;
    const password = data.password;

    let status = {
        username:false,
        password:false
    }

    // check username in auth database
    try {

        const usernameExists = await authModel.exists({username});
        if(usernameExists){
            status.username = true;
            
            const passwordExists = await authModel.exists({username, password })
            if(passwordExists){
                status.password = true;
            }
        }

    } catch (error) {
        
        console.log(error)
    }


    
    res.send(status)
}

