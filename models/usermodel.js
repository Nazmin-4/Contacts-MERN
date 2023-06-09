const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"mandatory"]

    },
    email:{
        type:String,
        required:[true,"mandatory"],
        unique:[true,"already in use"]
    },
    password:{
        type:String,
        required:[true,"mandatory"]

    }
},{
  timestamps:true, 
})
module.exports=mongoose.model("user",userSchema)
