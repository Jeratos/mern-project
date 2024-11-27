import User from "../models/user-model.js";

import bcrypt from "bcryptjs";

 let home = async (req,res)=>{
    try {
        
    res.status(200).send("hello this is home page....")
    
    } catch (error) {
        console.log(error.Message);
    }
}

 let register = async (req,res)=>{

    try {
        const {username,email,phone,password}= req.body;
        console.log(req.body);
        
        let isUserExist=await User.findOne({email: email});
        if(isUserExist){
       return res.status(400).json({message:"email is already exist..." });
        }
         
     //using hesh 
         let salt= 10;
         let hash_password= await bcrypt.hash(password, salt)

   let userCreated=  await User.create({username,email,phone,password: hash_password});

        res.status(200).json({
            msg: "user is successfully created...", 
            token: await userCreated.generateToken(), 
            userId:userCreated._id.toString()});

    } catch (error) {
        
        console.log(error.Message);
        
    }

}   


let login =async (req,res)=>{
try {
    
let {email,password}= req.body;

let isUserExist=await User.findOne({email: email});
if(!isUserExist){
    return res.status(400).json({message:"invalid credentials" });
}

let comp= await bcrypt.compare(password, isUserExist.password)


if(comp){
    res.status(200).json({
        msg: `welcome ${isUserExist.username}`,
        token: await isUserExist.generateToken(), 
        userId:isUserExist._id.toString()
    })
}
else{
    res.status(401).json({error: "invalid email or password"})
}

} catch (error) {
    console.log(error.Message);
}     

}

let user= async(req,res )=>{
try {
    let userData= req.user;
//    let userToken=req.token;
    // console.log(userData);
return res.status(200).json({userData});

} catch (error) {
    console.log("error");
}

}

export default home;
export {register,login,user};