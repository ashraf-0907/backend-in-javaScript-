// Promise creation

// import { Promise } from "mongoose";

// const asyncHandler = (requestHandler)=>{
//     (req,res,next) =>{
//         Promise.resolve(requestHandler(req,res,next)).catch((error)=> next(error))
//     }
// }

export {asyncHandler};

// Try catch way
const asyncHandler = (func) => async (req,res,next) =>{

    try {
        await func(req,res,next);
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}
