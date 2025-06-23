const fs= require("fs");
const requestHandler=(req, res) => {
  // console.log(req);
  // process.exit();//Stops event loop

  console.log(req.url, req.method);

  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title>Backend</title></head>");
    res.write("<h2>Enter Your Details: </h2>");
    
    res.write('<form action="/submit-detsils" method="POST">');

    res.write('<input type="text" name="username" placeholder="Enter Your Name: "/><br><br>');
    res.write('<label for="gender">Gender: </label>');
    res.write('<label for="male">Male </label>');
    res.write('<input type="radio" name="gender" id="male" value="male"/>');
    res.write('<label for="female">Female </label>');
    res.write('<input type="radio" name="gender" id="female" value="female"/>');
    res.write('<input type="submit" value="Submit"><br><br>');

    res.write('</form>');
    res.write('</body>');
    res.write("</html>");
    return res.end();
 
  }
  else if(req.url.toLowerCase()=="/submit-detsils" && req.method=="POST"){

    const store=[];
  
    req.on('data', chunk =>{
        console.log(chunk);
        store.push(chunk);
    })
    req.on('end',()=>{
      const fullBody= Buffer.concat(store).toString();
      console.log(fullBody);

      const params=new URLSearchParams(fullBody);

      // const bodyObject={};
      // for(const [key,val] of params.entries()){
      //   bodyObject[key]=val;
      //}
      const bodyObject=Object.fromEntries(params);
      console.log(bodyObject);
       fs.writeFileSync('chunk.txt',JSON.stringify(bodyObject));
    })

   
    res.statusCode=302;
    res.setHeader('Location','/');
    return res.end();

  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head> <title>Backend</title></head>");
      res.write("<body><h2>SATYAJIT ROY </h2></body>");

  
  res.write("</html>");
  return res.end();
 
  
};

module.exports =requestHandler;