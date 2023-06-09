const mongoose=require("mongoose");
const contactschema=mongoose.Schema(
    { user_id:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"user",
    },
        name:{
            type:String,
            required:[true,"mandatory"]
        },
        number:{
            type:String,
            required:[true,"mandatory"]
        }
    },{
        timestamps:true,
    }
)
module.exports=mongoose.model("contacts",contactschema);