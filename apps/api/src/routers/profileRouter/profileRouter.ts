import { Router } from "express";
const router = Router();
import { profile } from "@/controllers/profileController/profileController";

router.get("/", profile);

export default router;