const express=require('express')
const {requireAuth,options}=require('../middlewares/authM')
const router=express.Router();
router.get('/pgs',requireAuth({options}),(req,res)=>{res.send("I'm up")})
//TODO
module.exports=router;