const express=require('express');


const userRouter=require('./Routes/userRouter');
const {hosterRouter}=require('./Routes/hosterRouter');

const path=require('path');

const rootPath=require('./utils/pathUtils')

const app=express();

app.set('view engine','ejs');
app.set('views', 'views');


app.use(express.static(path.join(rootPath,'public')));

app.use(express.urlencoded({extended:true}))
app.use(userRouter);
app.use(hosterRouter);
app.use((req,res,next)=>{
    res.status(404).render('404',{registeredHomes:registeredHomes});
})


app.listen(3000,()=>{
    console.log("Port in localhost:3000");
})