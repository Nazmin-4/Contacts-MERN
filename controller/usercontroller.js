const asynchandler=require('express-async-handler');
const usermodel = require('../models/usermodel');
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")
const registeruser=asynchandler(async(req,res)=>{
    const {username,email,password}=req.body;
    if(!username ||!email||!password){
        res.status(400)
        throw new Error("required")
    }
    const userexist=await usermodel.findOne({email})
    if(userexist){
        res.status(400);
        throw new Error("exists")

    }
    const hashps=await bcrypt.hash(password,10);
    console.log(hashps)
    const user=await usermodel.create({
        username,email,password:hashps
    })
    if(user){
        res.status(201).json({_id:user.id,email:user.email})
    }
    else{
        res.status(400)
        throw new Error("not valid")
    }
    res.status(200).json({message:"resigter the user"})
})
const loginuser=asynchandler(async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        res.status(400)
        throw new Error("doesnt exist")
    }
    const user=await usermodel.findOne({email})
    console.log(process.env.access);

    if(user && await bcrypt.compare(password,user.password))
    {
        const accesstoken=jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id
            }
        },
        process.env.access
        ,
        {expiresIn:"15m"})
        res.status(200).json({accesstoken})

    }
    else{
        res.status(401)
        throw new Error("wrong credentials")
    }
    // res.status(200).json({message:"login the user"})
})
const currentuser=asynchandler(async(req,res)=>{
    // const contacts=await contact.find();
    res.status(200).json({message:"current the user"})
})
module.exports={registeruser,loginuser,currentuser}