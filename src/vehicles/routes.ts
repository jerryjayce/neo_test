import express from "express";
import { VehicleController } from "./controllers";

const router = express.Router({ mergeParams: true });

router.get("/vehicles", VehicleController.get_vehicles);

export default router;
