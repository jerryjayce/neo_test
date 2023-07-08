import express from "express";
import { ScheduleController } from "./controllers";

const router = express.Router({ mergeParams: true });

router.get("/schedule", ScheduleController.get_schedules);
router.get("/schedule/:id", ScheduleController.get_schedule_details);
router.get("/schedule/driver/:id", ScheduleController.get_driver_schedule);
router.get("/schedule/vehicle/:id", ScheduleController.get_vehicle_schedule);

export default router;
