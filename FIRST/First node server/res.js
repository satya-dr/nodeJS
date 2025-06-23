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
    res.write("<body><h2>Welcode to Home Page</h2></body>");
    res.write("</html>");
    return res.end();
    process.exit();
  } else if (req.url == "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title>Backend</title></head>");
    res.write("<body><h2>Products are coming soon.....</h2></body>");
    res.write("</html>");
    return res.end();
    process.exit();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head> <title>Backend</title></head>");
  res.write("<body><h2>I am satyajit Roty</h2></body>");
  res.write("</html>");
  return res.end();
  process.exit();
});

server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
