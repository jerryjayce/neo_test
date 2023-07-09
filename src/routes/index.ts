import express from "express";

const app = express();


import AuthRoutes from "../auth/routes";
import ScheduleRoutes from "../schedule/routes";
import VehicleRoutes from "../vehicles/routes";
import DriverRoutes from "../drivers/routes";
import QuotesRoutes from "../quotes/routes";


app.use("/auth", AuthRoutes);
app.use(ScheduleRoutes);
app.use(VehicleRoutes);
app.use(DriverRoutes);
app.use(QuotesRoutes);


export default app;


