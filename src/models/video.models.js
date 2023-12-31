import mongoose from "mongoose";
import aggregratePaginate from "mongoose-aggregate-paginate-v2"
const videoSchema = new mongoose.Schema({
    videoFile:{
        type:String, //aws
        required:true,
    },
    thumbnail:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
    duration:{
        type:Number,
        required:true,
    },
    views:{
        type: Number,
        default:0,
    },
    isPublished:{
        type:Boolean,
        default:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjctId,
        ref:'User',
    },
},{timestamps:true})
 
videoSchema.plugin(aggregratePaginate); // to use full power of mongoDB read aggregration Piplining

export const Video = new mongoose.model("video",videoSchema);