import { Router } from "express";
const router = Router()
import { login } from "@/controllers/loginController/loginController";

import { loginValidation } from "@/middleware/validation/loginValidation";
import { checkLogin } from "@/middleware/validation/checkLogin";

router.post("/", checkLogin, loginValidation, login)

export default router