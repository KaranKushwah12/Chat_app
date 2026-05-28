import express, { Router } from "express";
import {
  signupController,
  loginController,
  logoutController,
} from "../controllers/auth.controller.js";

const route = express.Router();

route.post("/signup", signupController);
route.post("/login", loginController);
route.post("/logout", logoutController);

export default route;
