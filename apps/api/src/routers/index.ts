import { Router } from "express";
const router = Router();

import loginRouter from "@/routers/loginRouter/loginRouter";
import register from "@/routers/registerRouter/registerRouter";
import position from "@/routers/positionRouter/positionRouter";
import profileRouter from "@/routers/profileRouter/profileRouter";
import getUserProfile from "@/routers/authRouter/authRouter";
import verifyEmail from "@/routers/verifyEmailRouter/verifyEmailRouter";
import productRouter from "@/routers/productRouter/productRouter";
import contactRouter from "@/routers/contactRouter/contactRouter";
import messageRouter from "@/routers/messageRouter/messageRouter";
import documentRouter from "@/routers/documentRouter/documentRouter";
import menuProfileRouter from "@/routers/menuProfileRouter/menuProfileRouter";
import profileImageRouter from "@/routers/profileImageRouter/profileImageRouter";
import changePasswordRouter from "@/routers/changePasswordRouter/changePasswordRouter";

router.use("/login", loginRouter);
router.use("/register", register);
router.use("/positions", position);
router.use("/profile", profileRouter);
router.use("/user-profile", getUserProfile);
router.use("/verify-email", verifyEmail);
router.use("/products", productRouter);
router.use("/contact", contactRouter);
router.use("/messages", messageRouter);
router.use("/documents", documentRouter);
router.use("/menuprofile", menuProfileRouter);
router.use("/profile-images", profileImageRouter);
router.use("/change-password", changePasswordRouter);

export default router;
