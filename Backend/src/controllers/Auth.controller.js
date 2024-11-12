// Auth.controller.js
const httpStatus = require("http-status");
const AuthService = require("../services/Auth.service");
const CatchAsync = require("../utils/CatchAsync");

class AuthController {
    static RegisterUser = CatchAsync(async (req, res) => {
        const res_obj = await AuthService.RegisterUser(req.body);
        res.status(httpStatus.CREATED).json({
            status: "success",
            message: res_obj.msg,
            data: { token: res_obj.token, refresh_token: res_obj.refresh_token }
        });
    });

    static LoginUser = CatchAsync(async (req, res) => {
        const res_obj = await AuthService.LoginUser(req.body);
        res.status(httpStatus.OK).json({
            status: "success",
            message: res_obj.msg,
            data: { token: res_obj.token }
        });
    });

    static ProfileController = CatchAsync(async (req, res) => {
        const res_obj = await AuthService.ProfileService(req.user);
        res.status(httpStatus.OK).json(res_obj);
    });
}

module.exports = AuthController;
