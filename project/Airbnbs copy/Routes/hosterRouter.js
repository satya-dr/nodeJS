const express=require('express');
const hosterRouter=express.Router();

const path=require('path');
const rootPath=require('../utils/pathUtils');



hosterRouter.get("/add-home",(req,res,next)=>{
    console.log("Hoter page get",req.url, req.method);
    res.render('addHome',{pageTitle:'Add home'});
    // res.sendFile(path.join(rootPath,'views','addHome.html'));
    

});

const registeredHomes=[];


hosterRouter.post("/add-home",(req,res,next)=>{
    console.log("Hoter page post",req.body,req.body.houseName);
    registeredHomes.push(req.body);
  
 
     res.render('homeAdded',{pageTitle:'Home Added Success full'});
        // res.sendFile(path.join(rootPath,'views','homeAdded.html'));
});

exports.hosterRouter=hosterRouter
exports.registeredHomes=registeredHomes;
