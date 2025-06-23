const express=require('express');
const routReady=express.Router();

const path=require('path');


routReady.post("/contact-us",(req,res,next)=>{
    res.sendFile( path.dirname(__dirname,'../','pages','ready.html'));
})

module.exports=routReady;