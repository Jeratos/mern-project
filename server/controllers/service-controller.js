import services from "../models/service-model.js";


async function service(req,res){
    try {
         let data = await services.find();

         res.status(200).json({msg:data});

    } catch (error) {
        res.status(400).json({msg:error.message});
        
    }
}

 export default service