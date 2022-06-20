import express from "express";
import { checkLoginCredentials, checkUsername, signUp } from "../controllers/authController.js";


const router = express.Router();


router.post("/signup", signUp)

router.post("/checkUsername", checkUsername)

router.post("/checkLoginCredentials", checkLoginCredentials)


export default router;