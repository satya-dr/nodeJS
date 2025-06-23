
const http = require("http");
const PORT = 3001;
const requestHandler =require('./user');
const server = http.createServer(requestHandler);


server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
