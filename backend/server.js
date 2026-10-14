require("dotenv").config();
let express=require('express');
let app=require('./src/app');
let connectdb=require('./src/database/db');
let post=require('./src/database/model');
 let uploadfile=require('./cloudstorage/storage');
 let cors=require("cors");
 app.use(cors());
let multer=require('multer');
app.use(express.json());
let upload=multer({storage:multer.memoryStorage()})
   app.post('/form',upload.single('image'),async(req,res)=>{
    try{
    let result= await uploadfile(req.file.buffer)
    let postdata=await post.create({
        image:result.url,
        caption:req.body.caption
    })
    res.status(201).json({message:"post created",postdata})
   }
catch(error){
    res.status(500).json({error:error.message})
}})
app.get('/feed',async(req,res)=>{
    try{
let postdata=await post.find()
res.status(200).json({postdata})
    }
    catch(error){
res.status(500).json({error:error.message})
    }
    
})
async function server(){
await connectdb()
app.listen(3000,()=>{
    console.log("server run successfully")
})}
server()