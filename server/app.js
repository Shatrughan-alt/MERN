// const dotenv=require("dotenv");
require('dotenv').config({path:'./config.env'});

const express=require('express');
// const mongoose=require("mongoose");


const app=express();

require('./db/conn')
const User=require('./model/userSchema');

// const DB='mongodb+srv://Shatrughan:Shatrughan@123@cluster0.cveonhg.mongodb.net/mernstack?retryWrites=true&w=majority';


app.use(express.json());

//we link router file to make link easy
app.use(require('./Router/auth'));


const PORT=process.env.PORT;


// mongoose.connect(DB,{
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false
// }).then(()=>{
//     console.log(`connection`);
// }).catch((err)=>console.log("no"));



// //Middleware
// const middleware =(req,res,next)=>{
//     console.log(`hello my middleware`);
//     next();
// }


// app.get("/",(req,res)=>{
//     res.send(`Hello World from the server`);
// });

// app.get("/about",middleware,(req,res)=>{
//     res.send(`Hello About World from the server`);
// });

// app.get("/contact",(req,res)=>{
//     res.send(`Hello Contact World from the server`);
// });

app.get("/signup",(req,res)=>{
    res.send(`Hello Registration Contact World from the server`);
});

app.get("/signin",(req,res)=>{
    res.send(`Hello Login Contact World from the server`);
});

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})



