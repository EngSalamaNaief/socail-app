const mongoose =require("mongoose");


const postSchema =new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        max:500,
        required:true
    },
    postPhoto:{
        type:String,
        default:""
    },
    likes:{
        type:Array,
        default:[]
    }
},{timestamps:true});



module.exports = mongoose.model("Post",postSchema)
