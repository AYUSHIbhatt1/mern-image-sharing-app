let imagekit=require("@imagekit/nodejs")
let ImageKit= new imagekit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY
})
async function uploadfile(buffer){
let result= await ImageKit.files.upload({
   file: buffer.toString("base64"),
    fileName:'image.png'
})
return result
}
 module.exports=uploadfile;
