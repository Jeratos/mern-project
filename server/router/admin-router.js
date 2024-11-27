import express from "express"
import admin,{getContacts,deleteUser,getUserById,updateUser, deleteContacts} from "../controllers/admin-controller.js"
import authMiddleware from "../middlewares/auth-Middleware.js";
import adminMiddleware from "../middlewares/admin-Middleware.js"
let router = express.Router();

router.route("/user").get(authMiddleware ,adminMiddleware ,admin);

router.route("/user/:id").get(authMiddleware ,adminMiddleware ,getUserById);

router.route("/user/delete/:id").delete(authMiddleware ,adminMiddleware ,deleteUser);

router.route("/user/update/:id").patch(authMiddleware,adminMiddleware, updateUser);

router.route("/contact").get(authMiddleware ,adminMiddleware ,getContacts);

router.route("/contact/delete/:id").delete(authMiddleware ,adminMiddleware ,deleteContacts);

export default router;