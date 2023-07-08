import express from "express";

const app = express();


import AuthRoutes from "../auth/routes";
import ScheduleRoutes from "../schedule/routes";
import VehicleRoutes from "../vehicles/routes";
import DriverRoutes from "../drivers/routes";


app.use("/auth", AuthRoutes);
app.use(ScheduleRoutes);
app.use(DriverRoutes);
app.use(VehicleRoutes);


export default app;


