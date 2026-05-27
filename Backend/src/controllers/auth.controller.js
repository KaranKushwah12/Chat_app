import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { sendWelcomeEmail } from "../emails/emailHandlers.js";
import { generateToken } from "../lib/utils.js";
import { ENV } from "../lib/env.js";

const signupController = async (req, res) => {
  const { fullName, email, password } = req.body;

  const name = typeof fullName === "string" ? fullName.trim() : "";
  const emailAddress = typeof email === "string" ? email.trim() : "";
  const userPassword = typeof password === "string" ? password.trim() : "";

  try {
    if (!name || !emailAddress || !userPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (userPassword.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }

    // check if email is valid: REGEX
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(emailAddress)) {
      return res.status(400).json({ message: "Please enter a valid email" });
    }

    // Check if the email already exists in the database
    if (await User.findOne({ email: emailAddress })) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(userPassword, 10);

    // Create a new user instance and save it to the database
    const newUser = new User({
      fullName: name,
      email: emailAddress,
      password: hashedPassword,
    });

    if (newUser) {
      // Save the user to the database
      await newUser.save();

      // Generate a token for the user and set it in the response
      generateToken(newUser._id, res);

      // Respond with the created user (excluding the password)
      res.status(201).json({
        message: "User created successfully",
        user: {
          _id: newUser._id,
          fullName: newUser.fullName,
          email: newUser.email,
          profilePicture: newUser.profilePicture,
        },
      });

      try {
        await sendWelcomeEmail(newUser.email, newUser.fullName, ENV.CLIENT_URL);
      } catch (emailError) {
        console.error("Error sending welcome email:", emailError);
      }
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export default signupController;
