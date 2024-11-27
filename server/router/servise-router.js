import express from "express"
import  service from "../controllers/service-controller.js"

let router=express.Router();


router.route("/service").get(service)

export default router;