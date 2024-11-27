import jwt from "jsonwebtoken"
import User from "../models/user-model.js"

let authMiddleware=async (req,res,next)=>{
const token = req.header("Authorization")

if(!token){
    return res.status(401).json({msg:"error"})
}

// console.log("before replacing bearer",token);

let realToken= token.replace("Bearer","").trim();
// console.log("token after replacing Bearer :",realToken);


try {
    let decoded = jwt.verify(realToken, 'ayushsinghchouhan');
    
    // console.log("DATA: ",decoded);
    
    let userData = await User.findOne({email: decoded.email}).select({password:0});
    
    // console.log(userData);
    // return res.status(200).json({msg:userData})
    req.user= userData;
    req.token=realToken;
    
    
    next()
    
} catch (error) {
    console.log(error.message);
}
}

export default authMiddleware;