const express=require('express');
const hosterRouter=express.Router();



const homesColtrollers=require('../controllers/home')



hosterRouter.get("/add-home",homesColtrollers.getAddHome);




hosterRouter.post("/add-home",homesColtrollers.postAddHome);

exports.hosterRouter=hosterRouter;

