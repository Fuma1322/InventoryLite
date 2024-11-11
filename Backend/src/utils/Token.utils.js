const jwt = require("jsonwebtoken");
const { PUBLIC_DATA } = require("../../constant");

exports.generatetoken = (user) => {
  // Create and return a JWT token
  const token = jwt.sign({ userid: user._id }, PUBLIC_DATA.jwt_auth, { expiresIn: '1h' });  // Ensure you define `expiresIn` properly
  return token;
}

exports.validateToken = (token) => {
  // Directly use the parameter token without redeclaring it
  const decodedToken = jwt.verify(token, PUBLIC_DATA.jwt_auth);  // Renamed to avoid conflict
  return decodedToken;
}
