import express from "express";
import { infoUser, loginController, registerController } from "../controllers/auth.controller.js";;
import { bodyLoginValidator, bodyRegisterValidator, validationInputs } from "../middlewares/validationInputs.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = express.Router();

router.post("/login", bodyLoginValidator,validationInputs,loginController);

router.post("/register",bodyRegisterValidator,validationInputs,registerController);

router.get('/protected',requireToken, infoUser)

export default router;
