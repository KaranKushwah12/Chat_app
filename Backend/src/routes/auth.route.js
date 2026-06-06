import express, { Router } from "express";
import {
  signupController,
  loginController,
  logoutController,
  updateProfilePictureController,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { arcjetProtection } from "../middlewares/arcjet.middleware.js";

const route = express.Router();

// Apply Arcjet protection to all routes in this router
route.use(arcjetProtection);

// Define the routes for authentication
route.post("/signup", signupController);
route.post("/login", loginController);
route.post("/logout", logoutController);

// Protected route for updating profile picture
route.put(
  "/update-profile-picture",
  protectRoute,
  updateProfilePictureController,
);

// Protected route to check authentication status
route.get("/check", protectRoute, (req, res) => {
  res.status(200).json({ message: "Authenticated", user: req.user });
});

export default route;
