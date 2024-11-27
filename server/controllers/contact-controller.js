import Contact from "../models/contact-model.js"



const contactForm = async (req,res)=> {
    try {
        let response=req.body;

       let contactCreated= await Contact.create(response);

        res.status(200).json(contactCreated);
    } catch (error) {
        console.log(error.message);
    }
}

export default contactForm;