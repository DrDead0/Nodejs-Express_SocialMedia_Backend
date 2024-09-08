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
            ref:"User"
        }
    },
    {
        timestamps:true
    }
)
videoSchema.plugin(mongooseAggregatePaginate)

export const video = mongoose.Schema.model("video",videoSchema)