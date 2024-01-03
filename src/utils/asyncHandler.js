// Promise creation

// import { Promise } from "mongoose";

// const asyncHandler = (requestHandler)=>{
//     (req,res,next) =>{
//         Promise.resolve(requestHandler(req,res,next)).catch((error)=> next(error))
//     }
// }

export {asyncHandler};

// Try catch way with higher order function
// its just a wrapper function to call our asyncronosly function
const asyncHandler = (func) => async (req,res,next) =>{

    try {
        await func(req,res,next);
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message,
        })
    }
}
