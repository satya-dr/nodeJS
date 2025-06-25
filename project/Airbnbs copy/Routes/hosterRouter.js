const express=require('express');
const hosterRouter=express.Router();

const path=require('path');
const rootPath=require('../utils/pathUtils');



hosterRouter.get("/add-home",(req,res,next)=>{
    console.log("Hoter page get",req.url, req.method);
    // res.render('addHome',{registeredHomes:registeredHomes});
    res.sendFile(path.join(rootPath,'views','addHome.html'));
    

});

const registeredHomes=[];
const registeredNumbers=[];

hosterRouter.post("/add-home",(req,res,next)=>{
    console.log("Hoter page post",req.body,req.body.houseName);
    registeredHomes.push({houseName:req.body.houseName, houseNumber:req.body.number});
 
    //  res.render('homeAdded',{registeredHomes:registeredHomes});
        res.sendFile(path.join(rootPath,'views','homeAdded.html'));
});

exports.hosterRouter=hosterRouter;
exports.registeredHomes=registeredHomes;
exports.registeredNumbers=registeredNumbers;