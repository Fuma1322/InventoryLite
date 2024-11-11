const { UserModel, ProfileModel } = require("../models");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { generatetoken } = require("../utils/Token.utils");

class AuthService {
  // Method to register a new user
  static async RegisterUser(body) {
    const { name, email, password } = body;

    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Email already in use");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user in the database
    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword
    });

    // Generate a JWT token and refresh token
    const token = generatetoken(user);
    const refresh_token = generatetoken(user, '2d'); // Setting expiration for the refresh token

    // Create an associated profile for the user
    await ProfileModel.create({
      user: user._id,
      refresh_token
    });

    return { msg: "User registered successfully", token, refresh_token };
  }

  // Method for user login
  static async LoginUser(body) {
    const { email, password } = body;

    // Check if the user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new ApiError(httpStatus.BAD_REQUEST, "User not registered");
    }

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Invalid password");
    }

    // Generate a JWT token for the logged-in user
    const token = generatetoken(user);

    return {
      msg: "User logged in successfully",
      token: token
    };
  }
}

module.exports = AuthService;
