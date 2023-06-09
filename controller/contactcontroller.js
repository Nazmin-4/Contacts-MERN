const asynchandler=require('express-async-handler');
const contact=require("../models/contactmodel");

const getcontact=asynchandler(async(req,res)=>{
    const contacts=await contact.find({user_id:req.user.id});
    res.status(200).json(contacts)
})
const gcontact=asynchandler(async(req,res)=>{
    const contacts=await contact.findById(req.params.id);
    if(!contacts){
        res.status(404)
        throw new Error("not found contact")
    }
    res.status(200).json(contacts)
})
const postcontact=asynchandler(async(req,res)=>{
    const {name,number}=req.body;
    if (!name || !number){
        res.status(400);
        throw new Error("all fields are required");
    }
    const contacts=await contact.create({
        name,number
    })
    console.log(req.body)
        res.status(200).json(contacts)
});
const putcontact=asynchandler(async(req,res)=>{
    const contacts=await contact.findById(req.params.id);
    if(!contacts){
        res.status(404)
        throw new Error("not found contact")
    }
    const updatecontact=await contact.findByIdAndUpdate(
        req.params.id,req.body,{new:true}
    )
        res.status(200).json(updatecontact)
    })
const deletecontact=asynchandler(async(req,res)=>{
        res.status(200).json({message:`delete all contacts ${req.params.id}`})
    })
module.exports={getcontact,putcontact,postcontact,deletecontact,gcontact};