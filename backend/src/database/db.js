let mongoose=require('mongoose');
async function connectdb(){
    try{
await mongoose.connect(process.env.DATABASE_URL)
console.log("database connected")
    }
    catch(error){
        console.log(error);
    }
}
module.exports=connectdb;