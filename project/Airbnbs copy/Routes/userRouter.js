const express=require('express');
const userRouter=express.Router();

const path=require('path');


const rootPath=require('../utils/pathUtils');
const {registeredHomes,registeredNumbers}=require('./hosterRouter')



userRouter.get("/",(req,res,next)=>{
    console.log("user page get",req.url, req.method);
    console.log(registeredHomes,registeredNumbers);
    res.render('home',{registeredHomes:registeredHomes,registeredNumbers:registeredNumbers });
    //  res.sendFile(path.join(rootPath,'views','home.ejs'));
});



module.exports=userRouter;