import express from "express";
import shipmentRoutes from "./routes/shipmentRoutes";

const app = express();
app.use(express.json());

app.get("/health", (req, res) => res.status(200).send("OK"));

app.use("/shipments", shipmentRoutes);

export default app;
