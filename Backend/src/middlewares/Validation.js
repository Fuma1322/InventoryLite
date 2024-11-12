const { validationResult } = require("express-validator");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");

const Validation = (req, res, next) => {
  try {
    const result = validationResult(req);

    // If there are validation errors, throw an ApiError
    if (!result.isEmpty()) {
      throw new ApiError(httpStatus.BAD_REQUEST, result.array()[0].msg);
    }

    // If no validation errors, move to the next middleware
    next();
  } catch (error) {
    // Pass the error to the next middleware
    next(error);
  }
};

module.exports = Validation;
