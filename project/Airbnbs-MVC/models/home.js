const fs =require('fs');
const path= require('path');
const rootPath= require('../utils/pathUtils')


//Fake dataBase
// const registeredHomes=[];

module.exports = class Home{
   constructor(houseName,number,price,location,rating,imageUrl){
    this.houseName=houseName;
    this.number=number;
    this.price=price;
    this.location=location;
    this.rating=rating;
    this.imageUrl=imageUrl;

   }
    
save(){
    Home.fetchAll((registeredHomes)=>{
         registeredHomes.push(this);
    const homeDataPath=path.join(rootPath,'data','homes.json');
    fs.writeFile(homeDataPath, JSON.stringify(registeredHomes),err=>{
        console.log("File writing encluded",err)
    })
    })
   
}

static fetchAll(callback){
    const homeDataPath=path.join(rootPath,'data','homes.json');
    fs.readFile(homeDataPath,(err,data)=>{
        console.log("File Read: ",err,data);
        callback(!err?JSON.parse(data):[])
           })
    
}


}