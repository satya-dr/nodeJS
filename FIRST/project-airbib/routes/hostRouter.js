const express =require('express');
const hostRouter=express.Router();


    
hostRouter.get("/home",(req,res,next)=>{
    
    res.send(
        `<h1>Register Your Home here: </h1>
       <form action="/home" method="POST">
       <input type="text" name="houseName" placeholder="Enter your House Name:"/>
       <input type="number" name="number" placeholder="Enter your House number:"/>
       <input type="submit" />

       </form>
        `
    )
})
hostRouter.post("/home",(req,res,next)=>{
    console.log(req.body);
    
    res.send(
        `<h1>House Registered successfully...</h1>
        <button><a href="/">Go to home</a></button>

        `
    )
})

module.exports=hostRouter;