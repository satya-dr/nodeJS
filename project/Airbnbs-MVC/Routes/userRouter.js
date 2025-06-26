const express=require('express');
const userRouter=express.Router();


const homesColtrollers=require('../controllers/home')




userRouter.get("/",homesColtrollers.getHomes);



module.exports=userRouter;