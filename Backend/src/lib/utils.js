import jwt from "jsonwebtoken";
import { ENV } from "./env.js";

export const generateToken = (userId, res) => {
  const { JWT_SECRET } = ENV;
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }
  const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "7d" });
  res.cookie("token", token, {
    httpOnly: true, //prevent xss attacks
    secure: ENV.NODE_ENV === "development" ? false : true, // Set secure flag in production
    sameSite: "strict", // This helps prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 7 days
  });

  return token;
};
