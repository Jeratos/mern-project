
// import ('dotenv').config();
import express from "express";
import router from "./router/auth-router.js"
import contactRoute from "./router/contact-router.js"
import serviceRoute from "./router/servise-router.js"
import adminRouter from "./router/admin-router.js"
import connectDB from "./utils/db.js"
import errorMiddleware from "./middlewares/error-middleware.js";
import cors from "cors";

// const express = require("express")
// const router= require("./router/auth-router")


let app= express();
let port= 80;

const crosAction={
    origin:"http://localhost:5173",
    method:"GET,POST,DELETE,PATCH,PUT,HEAD",
    credentials:true
}
app.use(cors(crosAction));
app.use(express.json());


app.use("/api/auth",router);
app.use("/api/form",contactRoute);
app.use("/api/data",serviceRoute);
app.use("/api/admin",adminRouter);



app.use(errorMiddleware);


connectDB().then(()=>{

    app.listen(port,()=>{
        console.log(`listening on port ${port}`);
    })
})
