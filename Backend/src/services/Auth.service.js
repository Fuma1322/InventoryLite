const { UserModel, ProfileModel } = require("../models")
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError")

class AuthService {
    static async RegisterUser (body) {
        const {name,email,password} = body

        const checkExist = await UserModel.findOne({email})
        if (!checkExist) {
            throw new ApiError(httpStatus.BAD_REQUEST, "UserAlready Registered")
            return
            
        }

        const user = await UserModel.create({
            name,email,password
        })

        await ProfileModel.create({
            user: user._id
        })
        return {
            msg: "User Registered Successfully",
            token: ''
        }
    }
}

module.exports = AuthService