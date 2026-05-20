import exprss, { Router } from "express";
import loginController from "../controllers/auth.controller.js";

const route = exprss.Router();

route.get("/login", loginController);

export default route;
