import express from "express";
import { VehicleController } from "./controllers";
import { authorization } from "../middleware/Authorization";


const router = express.Router({ mergeParams: true });

router.get("/vehicles", authorization, VehicleController.get_vehicles);

export default router;
