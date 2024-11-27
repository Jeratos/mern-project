import express from "express"
import contactForm from "../controllers/contact-controller.js"



let router= express.Router();


router.route("/contact").post(contactForm);




// module.exports= router;
export default router;