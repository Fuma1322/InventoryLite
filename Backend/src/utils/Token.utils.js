const jwt = require("jsonwebtoken");
const { PUBLIC_DATA } = require("../../constant");

exports.generatetoken = (user, expiresIn = "1h") => {
  // Create and return a JWT token with flexible expiration
  const token = jwt.sign({ userid: user._id }, PUBLIC_DATA.jwt_auth, { expiresIn });
  return token;
};

exports.validateToken = (token) => {
  try {
    // Verify the token and return the decoded payload
    const decodedToken = jwt.verify(token, PUBLIC_DATA.jwt_auth);
    return decodedToken;
  } catch (error) {
    // Handle verification errors gracefully
    console.error("Token validation error:", error.message);
     throw new Error("Invalid or expired token");
  }
};
