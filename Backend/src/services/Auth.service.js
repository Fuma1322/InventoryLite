const { UserModel, ProfileModel } = require("../models")
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const { generatetoken } = require("../utils/Token.utils");

class AuthService {
    static async RegisterUser (body) {
        const {name,email,password} = body

        const checkExist = await UserModel.findOne({email})
        if (checkExist) {
            throw new ApiError(httpStatus.BAD_REQUEST, "User Already Registered")
            return
            
        }

        const user = await UserModel.create({
            name,email,password
        })

        const token = generatetoken(user)
        const refresh_token = generatetoken(user, '2d')

        await ProfileModel.create({
            user: user._id,
            refresh_token
        })


        return {
            msg: "User Registered Successfully",
            token: token
        }
    }

    static async LoginUser (body) {
        const {name,email,password} = body

        const checkExist = await UserModel.findOne({email})
        if (!checkExist) {
            throw new ApiError(httpStatus.BAD_REQUEST, "User Not Registered")
            return
        }

        if (password !== checkExist.password) {
            throw new ApiError(httpStatus.BAD_REQUEST,"Invalid Credentials");
            return
        }

        const token = generatetoken(checkExist)

        return {
            msg: "User Login Successfully",
            token: token
        }
    }

    static async ProfileService (user) {
        const checkExist = await UserModel.findById(user).select("name email")
        if (!checkExist) {
            throw new ApiError(httpStatus.BAD_REQUEST,"User Not Registered")
            return
        }

        return {
            msg: "Data fetched",
            user: checkExist
        }
    }
}

module.exports = AuthService