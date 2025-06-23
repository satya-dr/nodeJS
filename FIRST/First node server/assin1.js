const http=require('http');
const PORT=999;
const page=http.createServer((request,response)=>{

    if(request.url=='/home'){
        response.write('<h1>You are in HOME</h1>');
            return response.end();
    }else if(request.url=='/men'){
         response.write('<h1>You are in MEN</h1>');
             return response.end();
    }else if(request.url=='/women'){
         response.write('<h1>You are in Women</h1>');
             return response.end();
    }else if(request.url=='/kids'){
         response.write('<h1>You are in KIDS</h1>');
             return response.end();
    }else if(request.url=='/cart'){
         response.write('<h1>You are in CART</h1>');
             return response.end();
    }
   
     response.write(`
        <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Click a button bellow: </h1>
     <div class="button" style="display: flex; text-decoration: none;">
        <button><a href="/home">HOME</a></button>
        <button><a href="/men">MEN</a></button>
        <button><a href="/women">WOMEN</a></button>
        <button><a href="/kids">KIDS</a></button>
        <button><a href="/cart">CART</a></button>
    </div>
</body>
</html>`
     );

    return response.end();
     process.exit();
     
});

    page.listen(PORT,()=>{
        console.log('Compiled successfull...');
    });