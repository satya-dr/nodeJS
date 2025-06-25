//Core module
const path=require('path');

//External module
const express =require('express');
const app=express();

//Local module
const userRouter=require("./routes/userRouter")
const {hostRouter}=require("./routes/hostRouter")
const rootPath=require('../project-airbib/utils/pathUtils')



app.use(express.urlencoded({extended:true}));
app.use( userRouter);// default path set korte parchi na mane app.use( "/user",userRouter); ata kaj korche na
app.use(hostRouter);
app.use((req,res,next)=>{
        res.status(404).sendFile(path.join(rootPath,'views','404.html'))
    
})





const PORT=3004;
app.listen(PORT,()=>{
    console.log("port successfull.....");
})