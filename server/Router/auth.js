const jwt =require('jsonwebtoken');
const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const authenticate=require("../middleware/authenticate");
const cookieParser = require("cookie-parser")
router.use(cookieParser())

require("../db/conn");
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send(`Hello world from server router.js`);
});


//By promices
// router.post("/register",(req,res)=>{

//     const { name, email,phone,work,password,cpassword}=req.body;

//     if(!name|| !email|| !phone|| !work|| !password|| !cpassword){
//         return res.status(422).json({error:"sahi se fill kr"});
//     }

//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"Email already Exist"});
//         }
//         const user=new User({ name, email,phone,work,password,cpassword});
//         user.save().then(()=>{
//             res.status(201).json({message:"user registered successfully"});
//         }).catch((err)=>res.status(501).json({error:"Failed to register"}));
//     }).catch(err=>console.log(err));


//     console.log(req.body);
//     res.json({message:req.body});
//     res.send(`mera router page`);
// });


// Async- await

router.post("/register", async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill the data carefully" });
    }
    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" });
        }
        else if (password != cpassword) {
            return res.status(422).json({ error: "password are not matching" });
        }
        else {
            const user = new User({ name, email, phone, work, password, cpassword });



            //future me data return karega isliye await
            // const userRegister=await user.save();
            // if(userRegister){
            //     res.status(201).json({message:"user registered successfully"});
            // }
            // else{
            //     res.status(501).json({error:"Failed to register"});
            // }   


            //yaha pe
            await user.save();
            res.status(201).json({ message: "user registered successfully" });
        }


    }
    catch (error) {
        console.log(err)
    }

    console.log(req.body);

});

// login route

router.post("/signin", async (req, res) => {
    console.log(req.body);
    // res.json({message:"awesome"});
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Plz fill the data correct" })
        }

        const userLogin = await User.findOne({ email: email })
        console.log(userLogin);

        if (userLogin) {

            const isMatch = await bcrypt.compare(password, userLogin.password);

            token =  await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+258920),
                httpOnly:true
            })

            if (!isMatch)
                res.status(400).json({ error: "Invalid Credentials" });
            else
                res.json({ message: "User Signin Successfully" });
        }
        else {
            res.status(400).json({ error: "Invalid Credentials" });
        }



    } catch (error) {
        console.log(error);

    }
})

router.get('/about',authenticate,(req,res)=>{
    console.log(`Hello my About`);
    
    res.send(req.rootUser);
})

router.get('/getData',authenticate,async(req,res)=>{
    console.log(`Hello my getData`);

    res.send(req.rootUser);
})

// contact us page

router.post("/contact",authenticate,async(req, res) => {
    try{
        const{name,email,phone,message}=req.body;
        if (!name|| !email|| !phone|| !message){
            console.log("error fill contact form");
            return res.json({error:"Please fill the contact form"});
        }
        const userContact1=await User.findOne( {email:email});
        if(userContact1){
            const userMessage=await userContact1.addMessage(name,email,phone,message);
            await userContact1.save(userMessage);
            res.status(201).json({message:"message sent"});
        }
    }
    catch(error){
        console.log(error);
    }
});


// Logout page

router.get('/logout',  (req, res) => {
    console.log(`Hello my Logout`);
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send('User Logout');
})


module.exports = router;
