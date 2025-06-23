

//External module
const express=require('express');

//Local  Module
const requestHandler =require('./user');

const app=express();

app.get("/",(req,res,next)=>{
    console.log("Came in First middleware",req.url , req.method);
    res.send("<h1>HOME</h1>");
    next();
})
app.post("/submit",(req,res,next)=>{
    console.log("Came in Second middleware",req.url , req.method);
    res.send("<h1>Submit details </h1>");
})

app.use("/",(req,res,next)=>{
    console.log("Came in another middleware",req.url , req.method);
    res.send("<h1>hello</h1>");
    next();
})
const PORT = 3001;


app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
