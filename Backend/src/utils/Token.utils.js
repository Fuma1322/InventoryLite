<<<<<<< HEAD
const jwt = require("jsonwebtoken")
const { PUBLIC_DATA } = require("../../constant")

exports.generatetoken = (user, expire='1d') => {
    const token = jwt.sign({userid:user._id}, PUBLIC_DATA.jwt_auth,{
        expiresIn: expire
    })
    return token
}

exports.validateToken = (token) => {
    const tokens = jwt.verify(token, PUBLIC_DATA.jwt_auth)
    return tokens
}
=======
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
>>>>>>> afe15a0c8fca9464dfebecbf99c2d87b9128ead0
