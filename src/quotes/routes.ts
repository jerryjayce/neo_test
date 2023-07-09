import express from "express";
import { QuoteController } from "./controllers";
import { authorization } from "../middleware/Authorization";


const router = express.Router({ mergeParams: true });

router.post("/quote/:id", authorization, QuoteController.update_quote);
router.get("/quotes", authorization, QuoteController.get_quote);

export default router;
