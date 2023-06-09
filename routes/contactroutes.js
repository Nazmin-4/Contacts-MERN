const express=require("express");
const router=express.Router();
const {getcontact,postcontact,putcontact,deletecontact,gcontact}=require('../controller/contactcontroller')
router.route("/").get(getcontact)
router.route("/").post(postcontact)
router.route("/:id").put(putcontact).get(gcontact).delete(deletecontact)
module.exports=router;