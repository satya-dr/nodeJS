console.log("Hello");

const fs= require('fs');
fs.writeFile("file.txt","Files",(err)=>{
    if(err){
        console.log("Error found");
    }
    else{
        console.log("File create successfull");
    }
})