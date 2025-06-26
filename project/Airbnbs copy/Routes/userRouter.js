const express=require('express');
const userRouter=express.Router();

const path=require('path');


const rootPath=require('../utils/pathUtils');
const {registeredHomes}=require('./hosterRouter')



userRouter.get("/",(req,res,next)=>{
    console.log("user page get",req.url, req.method);
    console.log(registeredHomes);
    res.render('home',{registeredHomes:registeredHomes,pageTitle:'Home Page' });
    //  res.sendFile(path.join(rootPath,'views','home.ejs'));
});



module.exports=userRouter;