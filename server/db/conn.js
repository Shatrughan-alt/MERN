const mongoose =require("mongoose");

const DB=process.env.DATABASE;

// mongoose.set("strictQuery",true)

// try {
//     const connection = mongoose.connect(DB)
//     if(connection){
//         console.log("Connection Success");
//     } 
// } catch (error) {
//     console.log(error);
// }

mongoose.connect(DB,{
    useNewUrlParser:true
}).then(()=>{
    console.log(`connection`);
}).catch(err=>console.log("no"));




