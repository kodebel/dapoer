import { Router } from "express";
import { getUserProfile } from "@/controllers/menuProfileController/menuProfileController";
import { updateUserProfileImage } from "@/controllers/menuProfileController/menuProfileController"; // Controller untuk POST

const router = Router();

router.get("/", getUserProfile);
router.post("/upload", updateUserProfileImage); // Tambahkan POST di sini juga

export default router;
