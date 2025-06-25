const express=require('express');
const app=express();

const userRouter=require('./Routes/userRouter');
const hosterRouter=require('./Routes/hosterRouter');

const path=require('path');

const rootPath=require('./utils/pathUtils')

app.use(express.static(path.join(rootPath,'public')));

app.use(express.urlencoded({extended:true}))
app.use(userRouter);
app.use(hosterRouter);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootPath,'pages','404.html'));
})


app.listen(3000,()=>{
    console.log("Port in localhost:3000");
})