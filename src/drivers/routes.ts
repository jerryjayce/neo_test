import express from "express";
import { DriverController } from "./controllers";

const router = express.Router({ mergeParams: true });

router.get("/drivers", DriverController.get_drivers);

export default router;
