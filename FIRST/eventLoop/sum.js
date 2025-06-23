const sumHandeler = (req, res) => {
    console.log("You are in Result", req.url);

    const body=[];
    req.on('data', chunk => body.push(chunk));
    req.on('end', ()=>{
     const bodydata=   Buffer.concat(body).toString();
     console.log(bodydata);
     const params= new URLSearchParams(bodydata);
     console.log(params);
     const bodyObj  = Object.fromEntries(params);
     console.log(bodyObj);
     const result=Number(bodyObj.number1) +Number(bodyObj.number2); 
     console.log(result);

     res.setHeader("Content-Type", "text/html");
         res.write(
             `<html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Calculator</title>
 </head>
 <body>
     <h1>Sum of ${bodyObj.number1} and ${bodyObj.number2} is ${result}</h1>
 </body>
 </html>`)
    })


};


module.exports=sumHandeler;