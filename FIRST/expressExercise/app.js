const express=require('express');
const bodyParser=require('body-parser')
const app=express();

app.use((req,res,next)=>{
    console.log("First middleware",req.url, req.method);
    next(); 
})
app.use((req,res,next)=>{
    console.log("Second middleware",req.url, req.method);
    next();
})
// app.use((req,res,next)=>{
//     console.log("Third middleware",req.url, req.method);
//     res.send("<h1>Welcome to Third middleware</h1>")
// })

app.get("/",(req,res,next)=>{
    console.log("Haldling / for get",req.url, req.method);
    res.send("<h1>Welcome to Handling page</h1>")
});



app.get("/contact-us",(req,res,next)=>{
    console.log("contact page",req.url, req.method);
    res.send(
     `   
        <h1>Enter your details:</h1>
        <form action="/contact-us" method='POST'>
            <input type="text" name='name' placeholder='Enter your Name' />
            <input type="email" name='email' placeholder='Enter your email' />
            <input type="submit" />
        </form>`
        
        
    )
});
// app.post("/contact-us",(req,res,next)=>{
//     console.log("First han",req.url, req.method,req.body);
//     res.send("<h1>Thanks for youer details</h1>");
//     next();
// })

app.use(bodyParser.urlencoded());

app.post("/contact-us",(req,res,next)=>{
    console.log("Haldling / for post",req.url, req.method,req.body);
    res.send("<h1>Thanks for youer details</h1>")
})


app.listen(3003,()=>{
    console.log("You are in Exprss.js first project");
})



