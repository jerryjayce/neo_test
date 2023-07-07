import express from "express";
import { ScheduleController } from "./controllers";
import { catchAsync } from "../utils/error-service";

const router = express.Router({ mergeParams: true });

router.get("/schedules", catchAsync(ScheduleController.get_schedules));

export default router;
