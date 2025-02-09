const express = require('express')
const app = express();
const mongoose = require('mongoose')
const userRouter = require('./routes/userRouter')
const profileRouter=require('./routes/profileRouter')
const postRouter=require('./routes/postRouter')

//update
console.log("new things")


app.use(express.json())
app.use("",userRouter);
app.use("",profileRouter);
app.use("",postRouter);


app.listen('5000', ()=> console.log('server running on 5000'))

mongoose.connect('mongodb+srv://admin:suba2717@cluster0.afk34.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0a')
    .then(()=> console.log('database connected..'))
    .catch((err) => console.log(err))


app.get('/',(req,res)=>{
    res.send('server connected')
})


  
