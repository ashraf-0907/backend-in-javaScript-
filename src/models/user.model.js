import mongoose from "mongoose";

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
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true,
    },
    avatar:{
        type:String ,// aws url
        required:true, 
    },
    coverimage:{
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

export const user = new mongoose.model("users",userSchema);