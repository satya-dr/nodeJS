const express=require('express');
const userRouter=express.Router();

const path=require('path');

userRouter.get("/",(req,res,next)=>{
    console.log("user page get",req.url, req.method);
    res.sendFile(path.join(__dirname,'../','pages','home.html'));
});



module.exports=userRouter;