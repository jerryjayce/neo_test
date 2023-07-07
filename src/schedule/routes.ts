import express from "express";
import { ScheduleController } from "./controllers";
import { catchAsync } from "../utils/error-service";

const router = express.Router({ mergeParams: true });

router.get("/schedule", catchAsync(ScheduleController.get_schedules));
router.get("/schedule/driver/:id", catchAsync(ScheduleController.get_driver_schedule));
router.get("/schedule/vehicle/:id", catchAsync(ScheduleController.get_vehicle_schedule));

export default router;
