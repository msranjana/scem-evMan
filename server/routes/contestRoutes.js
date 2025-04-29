const express=require('express')
const {requireAuth,options}=require('../middlewares/authM')
const router=express.Router();
router.get('/pgs',requireAuth({options}),(req,res)=>{res.send("I'm up")})
router.get('/')
//TODO
module.exports=router;