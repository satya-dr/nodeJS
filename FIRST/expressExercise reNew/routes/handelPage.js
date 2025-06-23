const express=require('express');
const routHomePage=express.Router();

const path=require('path');

const rootPath=require('../utils/pathUtils');


routHomePage.get("/",(req,res,next)=>{
    console.log("I  am Home page",req.url,req.method);
    res.sendFile( path.join(rootPath,'pages','home.html'));
})



module.exports=routHomePage;