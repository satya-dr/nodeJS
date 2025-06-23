const express =require('express');
const userRouter=express.Router();


userRouter.get("/",(req,res,next)=>{
    
    res.send(
        `<h1>Welcome to AIRBUB</h1>
        <button><a href="/home">Add Home</a></button>
        `
    )
    
})

module.exports=userRouter;