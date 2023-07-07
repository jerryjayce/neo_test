import express from "express";
import { DriverController } from "./controllers";
import { catchAsync } from "../utils/error-service";

const router = express.Router({ mergeParams: true });

router.get("/drivers", catchAsync(DriverController.get_drivers));

export default router;
