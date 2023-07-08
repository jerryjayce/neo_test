import express from "express";
import { AuthController } from "./controllers";

const router = express.Router({ mergeParams: true });

router.post("/login", AuthController.login);

export default router;
