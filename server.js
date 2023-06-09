const express= require("express");
const env=require("dotenv").config();
const errorhandler=require('./middleware/errorhandler');
const connectdb = require("./config/connectdb");
connectdb();
const app=express();
const port=process.env.PORT;
app.use(express.json());
app.use("/api/contacts",require("./routes/contactroutes"));
app.use("/api/users",require("./routes/userroutes"));
app.use(errorhandler);
app.listen(port,()=>{
console.log(`i can do and i will do anything  ${port}`)
})
