const {body} = require ("express-validator")
class AuthValidation {

    static RegisterUser = [
        body("name").notEmpty().withMessage("Name cannot be empty"),
        body("email").isEmail().withMessage("Email must be valid").notEmpty().
        withMessage("Email cannot be empty"),
        body("password").isLength({min:6}).withMessage("Password include minimum of 6 characters").
        notEmpty().withMessage("Password is required"),
    ]

    static LoginUser = [
        body("email").isEmail().withMessage("Email must be valid").notEmpty().
        withMessage("Email cannot be empty"),
        body("password").isLength({min:6}).withMessage("Password include minimum of 6 characters").
        notEmpty().withMessage("Password is required"),
    ]
}

module.exports = AuthValidation