const fs= require("fs");
const http = require("http");
const PORT = 3001;

const server = http.createServer((req, res) => {
  // console.log(req);
  // process.exit();//Stops event loop

  console.log(req.url, req.method, req.headers);

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
    process.exit();
  }
  else if(req.url.toLowerCase()=="/submit-detsils"&& req.method=="POST"){

    fs.writeFileSync('user.txt','Satyajit Roy');
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
  process.exit();
  
});


server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
