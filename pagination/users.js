const mongoose=require('mongoose')
let userSchema=new mongoose.Schema({
    name:{type:String, required:true},
    class:{type:String}  
})
module.exports=mongoose.model('User',userSchema)