import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (req, res) => res.status(200).send("OK"));

export default app;
