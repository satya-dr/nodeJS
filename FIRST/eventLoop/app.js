const http=require("http");
const mainServer=require('./claculator');
const server =http.createServer(mainServer);
const PORT=699;


server.listen(PORT,()=>{
    console.log("Port successfull....");
})