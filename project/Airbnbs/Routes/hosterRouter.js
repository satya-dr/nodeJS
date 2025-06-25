const express=require('express');
const hosterRouter=express.Router();

const path=require('path');
const rootPath=require('../utils/pathUtils');



hosterRouter.get("/add-home",(req,res,next)=>{
    console.log("Hoter page get",req.url, req.method);
    res.sendFile(path.join(rootPath,'pages','addHome.html'));

});

hosterRouter.post("/add-home",(req,res,next)=>{
    console.log("Hoter page post",req.body);
        res.sendFile(path.join(rootPath,'pages','homeAdded.html'));
});

module.exports=hosterRouter;