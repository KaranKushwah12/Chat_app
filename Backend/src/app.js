import express from "express";
import authRouters from "./routes/auth.route.js";
import cokieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cokieParser());

app.use("/api/auth", authRouters);

export default app;
