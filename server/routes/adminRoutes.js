const express=require('express')
const {requireAuth,options}=require('../middlewares/authM')
const {connectDB}=require("../controllers/dbCon")
const Contest = require("../models/Contest")
const Question = require("../models/Question")
const router=express.Router();
router.get('/pgs',requireAuth({options}),(req,res)=>{res.send("I'm up")})
router.post('/test/create',async(req,res)=>{
const {title,description,startTime,endTime,questions,vis,type}=req.body;
if(!title) return res.status(500).json({success:false,message:"Name required"});
try{
    await connectDB();
    const ques=[];
    if(questions)for(q of questions){
        if(q.old){
            ques.push(q.id)
            continue
        }
        var t=new Question({
            type:q.type,title:q.title,correctAnswer:q.correctAnswer,testcases:q.testcases,marks:q.marks
        })
        await t.save();
        ques.push(t._id)
    }
    const newContest= new Contest({
        title,description,startTime:new Date(),endTime:new Date(),questions:ques,type //just for testing, will rep with actual start and end
    })
    await newContest.save();
    return res.status(200).json({success:true,contestID:newContest._id})
}
catch(err){
    console.log(err)
    return res.status(500).json({success:false,message: err})
}
})
//TODO
module.exports=router;