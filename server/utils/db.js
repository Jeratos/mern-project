import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()



const URI= process.env.MONGODB_URI;

// let URI="mongodb+srv://ayush:ayushtest@cluster0.mmyww.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0";

// mongoose.connect(URI);

let databaceConnection=async ()=>{

    try {
        
        await mongoose.connect(URI);
        console.log("success to connect with database....");
    } catch (error) {
        
        console.error("failed to connect..."+error.message);
        process.exit(0);
    }
}

export default databaceConnection;
