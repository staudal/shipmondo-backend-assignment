import express from "express";
import { createNewShipment } from "../controllers/shipmentController";

const router = express.Router();

router.post("/", createNewShipment);

export default router;
