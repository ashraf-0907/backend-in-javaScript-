import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
        unique: true,
        lowercase:true,
        trim:true,
        index:true,
    },
    username:{
        type:String,
        required:true,
        unique: true,
        lowercase:true,
        trim:true,
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
        index:true,
    },
    avatar:{
        type:String ,// aws url
        required:true,
    },
    coverImage:{
        type:String,
    },
    watchHistory:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"video",
    },
    password:{
        type: String,
        required: [true, 'Password is required'] // custom error message
    },
    refershToken:{
        type:String,
    }

},{timestamps:true});

// this will hash the password 
userSchema.pre("save",async function(next){
    // do something
    // We have to update the hash whenever the password is modified so the function should not be executed 
    // for each modification i.e in modifying names etc..
    if(!this.isModified("password")) return next();

    // other wise we have to execute the below line

    this.password = await bcrypt.hash(this.password,16);
    next();
})

// to check the password is correct we cant compare directly bcrypt package provide a method to compare the password
// we have to create our own custom function to do this mongoose provide the functionality of doing this readme section ref:-"bcrypt library study"

userSchema.methods.isCorrectPassword = async (password)=>{
    return await bcrypt.compare(password,this.password);
} // isCorrectPassword become the property of the userSchema.

userSchema.methods.genrateAccessToken = function(){
    return jwt.sign({
        _id: this._id,
        email: this.email,
        fullname: this.fullname,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    })
}
userSchema.methods.genrateRefereshToken = function(){
    return jwt.sign({
        _id: this._id,
    },
    process.env.REFERESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFERESH_TOKEN_EXPIRY,
    })
}

export const User = new mongoose.model("users",userSchema);