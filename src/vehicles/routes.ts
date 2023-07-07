import express from "express";
import { VehicleController } from "./controllers";
import { catchAsync } from "../utils/error-service";

const router = express.Router({ mergeParams: true });

router.get("/vehicles", catchAsync(VehicleController.get_vehicles));

export default router;
