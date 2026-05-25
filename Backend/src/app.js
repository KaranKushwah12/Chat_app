import express from "express";
import dotenv from "dotenv";
import authRouters from "./routes/auth.route.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/auth", authRouters);

export default app;
