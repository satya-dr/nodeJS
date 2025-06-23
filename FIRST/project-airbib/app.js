const express =require('express');
const app=express();

//Local module
const userRouter=require("./routes/userRouter")
const hostRouter=require("./routes/hostRouter")



app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter);
app.use("/host", hostRouter);
app.use((req,res,next)=>{
    res.status(404).send("<h1>404 Your page is not found</h1>");
})





const PORT=3004;
app.listen(PORT,()=>{
    console.log("port successfull.....");
})