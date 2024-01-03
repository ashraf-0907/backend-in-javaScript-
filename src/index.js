// import dotenv from "dotenv";
// dotenv.config({
//     path: './.env'
// })

import * as dotenv from 'dotenv'
dotenv.config()



// METHOD 1

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import express from "express"; 

// const app = express();


// const connectDB = async () =>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

//         app.on("error",()=>{
//             console.log("Error: ", error); 
//         })
//     } catch (error) {
//         console.log("ERROR: ",error);
//     }
// } 
// connectDB();

 //METHOD 2

// require('dotenv').config({
//     path: './env'
// });
import connectDB from "../src/db/index.js";
import app from './app.js';

var port = process.env.PORT || 5000;
connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`Application is workig on port ${port}`);
    })
})
.catch((error)=>{
    console.log("MONGOdb connection failed", error);
})