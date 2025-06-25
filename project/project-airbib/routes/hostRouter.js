
//Core module 
const path=require('path');

//External modle
const express =require('express');
const hostRouter=express.Router();

//Local Module
const rootPath=require('../utils/pathUtils');


    
hostRouter.get("/home",(req,res,next)=>{
    
        res.sendFile(path.join(rootPath,'views','addHome.html'))
    
})
hostRouter.post("/home",(req,res,next)=>{
    console.log(req.body);
    
        res.sendFile(path.join(rootPath,'views','homeAdded.html'))
    
})

module.exports=hostRouter;