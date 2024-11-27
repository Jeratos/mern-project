import User from "../models/user-model.js";
import contact from "../models/contact-model.js"
//user details

 

async function getAdminData(req, res) {
  try {
    let userData = await User.find({}, { password: 0 });
    // console.log(userData);
    if (!userData || userData.length === 0) {
      return res.status(404).json({ message: "user data is not exist" });
    }

    return res.status(200).json({ userData });
  } catch (error) {
    // next(error);
  }
}

//contect detailes

async function getContacts(req, res) {

    try {
        let contactData = await contact.find();

if(!contactData || contactData.length===0){
    return res.status(200).json({message:"user not found"})
}

     return res.status(200).json({contactData})
        
    } catch (error) {
        next(error)
    }
}

async function deleteContacts(req,res) {
  try {
let id = req.params.id;
await contact.deleteOne({_id:id});

res.status(200).json({msg:"message is deleted successfully...."});

  } catch (error) {
    next(error)
  }
  
}

const deleteUser = async (req,res)=>{
  try {
    let id = req.params.id;
     await User.deleteOne({_id:id});

     res.status(200).json({msg:"user is deleted successfully...."});
       
  } catch (error) {
    next(error);
  }
}

const getUserById = async (req,res)=>{
  try {
    let id = req.params.id;
     let userdata=await User.findOne({_id:id},{password:0});

     res.status(200).json({userdata});
  // console.log(userdata);      
  } catch (error) {
    next(error);
  }
}

// update user function :-

const updateUser = async (req,res)=>{
  try {
    let id = req.params.id;
    let updateUserData = req.body;
 
    let updatedData= await User.updateOne({_id:id},{
      $set:updateUserData,
    },)

    console.log(updatedData);      
     return res.status(200).json({updatedData});

  }
   catch (error) {
    next(error);
  }
}


export default getAdminData;
export {getContacts,deleteUser ,getUserById, updateUser,deleteContacts};