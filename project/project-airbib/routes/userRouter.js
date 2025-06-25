//Core module
const path=require("path");

//External module
const express =require('express');
const userRouter=express.Router();

//Local Module
const rootPath=require('../utils/pathUtils');



userRouter.get("/",(req,res,next)=>{
    
    res.sendFile(path.join(rootPath,'views','home.html'))
    
})

module.exports=userRouter;