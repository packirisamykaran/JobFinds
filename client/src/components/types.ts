

export type login = {
    username:string,
    password:string
}


export type signup = {
    username:string,
    password:string,
    confirmpassword:string
}



type language = {
    lang: String,
    proficiency: "Basic" | "Conversational" | "Fluent" | "Native or Bilingual"
}


type experience = {
    company: String,
    title:String,
    startDate: Date,
    endDate: Date | "Present"
    description: String,
}

type qualification = {
    institution:String,
    major: String,
    startDate:Date,
    endDate:Date,
}

type certification = {
    association:String,
    yearAttained: Date,
    title: String
}



export type profile = {
    username:String,
    firstName:String,
    lastName:String,
    dateOfBirth:Date,
    bio:String,
    profession:String,
    experience:experience[],
    qualification: qualification[];
    language: language[],
    certification: certification[],
    skills: String[],
    industry:String,
    expectedPay:String,
    country:String,
    profilePic?:File
}