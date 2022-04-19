const express=require("express");
const app=express();

// // const logger=(req,res,next)=>{

// //     console.log("New request from browser");
// //     next();
// // };

// // app.use(logger);

// // app.get("/",(req,res)=> {

// //     res.send("Hello World");
// // });

// // app.listen(4200,()=> {

// //     console.log("app is running ");
// // });

// // ---------------------------------------

// app.get("/products",(req,res)=>{

//     res.send("products");
// });



app.get("/products",(req,res)=>{

    res.json({
        id:1,
        name:"naveen",
    });

    // res.download("./package.json");
});



app.post("/products/create",(req,res)=>{

    res.send("post request received");
});

app.put("/products/:id",(req,res)=>{
    console.log(req.params);
    res.send("product updated");
});

app.delete("/products/1",(req,res)=>{

    res.send("product deleted");
});






app.listen(4000,()=>{
    console.log("app is running");

});