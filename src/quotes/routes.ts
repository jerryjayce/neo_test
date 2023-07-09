import express from "express";
import { QuoteController } from "./controllers";
import { authorization } from "../middleware/Authorization";


const router = express.Router({ mergeParams: true });

router.post("/quotes/:id", authorization, QuoteController.update_quote);

export default router;
