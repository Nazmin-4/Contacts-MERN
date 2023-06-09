const express= require("express");
const {registeruser,loginuser,currentuser}= require("../controller/usercontroller")
const router=express.Router();
router.post('/register',registeruser)
router.post('/login',loginuser)
router.post('/current',currentuser)
module.exports=router