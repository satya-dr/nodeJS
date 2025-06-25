const express=require('express');
const routContact=express.Router();

const path=require('path');


const rootPath=require('../utils/pathUtils')


routContact.get("/contact-us",(req,res,next)=>{
    console.log("I  am contact us",req.url,req.method);
     res.sendFile( path.join(rootPath,'pages','contactUs.html'));
})

routContact.post("/contact-us",(req,res,next)=>{
    console.log(req.body);
    res.sendFile( path.join(rootPath,'pages','thanks.html'));
})



