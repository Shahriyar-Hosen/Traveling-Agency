import express from "express";
import { login, register, socialLogin } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.post("/social", socialLogin)

export default router