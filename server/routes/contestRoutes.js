const express=require('express')
const {requireAuth,options}=require('../middlewares/authM')
const router=express.Router();
router.get('/pgs',requireAuth({options}),(req,res)=>{res.send("I'm up")})
router.post('/compile',async(req,res)=>{
    const {lang,ver,inp,code}=req.body;
    const rs=await fetch(process.env.cmpAPI,{
        method: "POST",
        body: JSON.stringify({
            "language": lang,
            "version": ver,
        "files": [
            {
                "name": "main",
                "content": code
            }
        ],
        "stdin": inp
        })
    })
    const rj=await rs.json();
    if(rj.stderr) return res.status(500).json({Compilation: "failed",Error: rj.stderr})
    return res.status(200).json({compilation : "success",stdout: rj.run.stdout})
})

module.exports=router;