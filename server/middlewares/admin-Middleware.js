const adminMiddleware= async(req,res,next)=>{

    try {
        // console.log(req.user);

let isAdmin= req.user.isAdmin;
if (!isAdmin){
  return  res.status(403).json({msg :"user is not an admin"});
    
}

        // res.status(200).json({msg : req.user});

 next();
    } catch (error) {
        next(error)
    }
}

export default adminMiddleware; 