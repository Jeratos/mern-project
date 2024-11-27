import express from "express"
import home,{register,login,user} from "../controllers/auth-controller.js"
import singupSchema,{signinSchema} from "../validators/auth-validate.js"
import validate from "../middlewares/validate-middleware.js"
import authMiddleware from "../middlewares/auth-Middleware.js"
// const express = require("express")



let router= express.Router();


router.route("/").get(home)

router.route("/register").post(validate(singupSchema) ,register);

router.route("/login").post(validate(signinSchema),login);

router.route("/user").get(authMiddleware,user);

// module.exports= router;
export default router;