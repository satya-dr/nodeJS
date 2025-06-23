const fs= require('fs');
const sumHandeler=require('./sum')
const requestControl=(req,res)=>{

  
    if(req.url=='/'){
        res.setHeader("Content-Type", "text/html");
        res.write(
            `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
</head>
<body>
    <h1>WELCOME TO MY CALCULATOR😊</h1>
    <BUtton><a href="/calculator">Click me</a></BUtton>
</body>
</html>`
        )
        return res.end();
    }
    else if(req.url.toLowerCase()=='/calculator'){
        res.write(
            `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
</head>
<body>
    <div class="main">
        <form action="/calculate-result" method="POST">
             <input type="text" name="number1"  placeholder="First Num" id="first" > +
             <input type="text" name="number2"  placeholder="Second Num"  id="second">
             <button>Sum</button>
        </form>     
    </div>
</body>
</html>`
        )
        return res.end();
    }
    else if(req.url.toLowerCase() === '/calculate-result' && req.method ==='POST'){
         return sumHandeler(req, res);
    }
 
 
    res.setHeader("Content-Type", "text/html");
        res.write(
            `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
</head>
<body>
    <h1>404 ERROR</h1>
    <BUtton><a href="/">Go to Home </a></BUtton>
</body>
</html>`)


}

module.exports=requestControl;
