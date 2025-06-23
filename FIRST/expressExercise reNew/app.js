const express=require('express');
const app=express();

//Local Module

const routContact=require('./routes/contact');
const routHomePage=require('./routes/handelPage');

const path=require('path');

const rootPath=require('../expressExercise reNew/utils/pathUtils')


app.use(express.urlencoded({ extended: true }));
app.use(routHomePage);
app.use(routContact);
app.use((req,res,next)=>{
   res.status(404).sendFile(path.join(rootPath,'pages','error.html'));
})


app.listen(3005,()=>{
    console.log("Port successfill......");
})





