import express from "express";
import { DriverController } from "./controllers";
import { authorization} from '../middleware/Authorization';

const router = express.Router({ mergeParams: true });

router.get("/drivers", authorization, DriverController.get_drivers);

export default router;
