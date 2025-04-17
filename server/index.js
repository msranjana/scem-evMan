const express =require('express')
const cors=require('cors')
require('dotenv').config()
const app=express();
const compRoutes=require('./routes/compilerRoutes');
const port=process.env.PORT|8080;
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{res.send("SOSCEvMan API is running...")})
app.use('/cmp',compRoutes);
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})
