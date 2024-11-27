import mongoose from "mongoose"

let serviceSchema= new mongoose.Schema({
service:{
    type: String,
    required: true 
},
description:{
    type: String,
    required: true
},
price:{
    type: String,
    required: true
},
provider:{
    type: String,
    required: true
},

})


let service= mongoose.model("Service",serviceSchema);

export default service;