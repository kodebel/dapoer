import { Router } from "express";
const router = Router();

import { changePassword } from "@/controllers/changePasswordController/changePasswordController";

router.post("/", changePassword);

export default router;
