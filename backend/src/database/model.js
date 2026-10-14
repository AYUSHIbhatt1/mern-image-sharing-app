let mongoose=require('mongoose');
let postSchema=new mongoose.Schema({
    image:String,
    caption:String
})
let post=mongoose.model("post",postSchema);
module.exports=post;