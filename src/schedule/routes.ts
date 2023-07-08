import express from "express";
import { ScheduleController } from "./controllers";
import { authorization } from "../middleware/Authorization";


const router = express.Router({ mergeParams: true });

router.get("/schedule", authorization, ScheduleController.get_schedules);
router.get("/schedule/:id", authorization, ScheduleController.get_schedule_details);
router.get("/schedule/driver/:id", authorization, ScheduleController.get_driver_schedule);
router.get("/schedule/vehicle/:id", authorization, ScheduleController.get_vehicle_schedule);

export default router;
