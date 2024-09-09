import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";



const videoSchema = new Schema(
    {
        videoFile:{
            type: String, //cloudnary
            required: true,
        },
        thumbnail:{
            type: String,//cloudnary
            required: true
        },
        title:{
            type: String, 
            required: true
        },
        description:{
            type: String,
            required: true
        },
        views:
        {
            type: Number,
        },
        isPublished:{
            type: Boolean,
            default: true
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref:"user"
        }
    },
    {
        timestamps:true
    }
)
 videoSchema.plugin(mongooseAggregatePaginate)  //? this plugin help to encrypt the password which will help in use security 

export const video = mongoose.Schema.model("video",videoSchema)