const ApiError = require("../utils/ApiError");

const ErrorHandling = (err, req, res, next) => {
    const obj = {};

    // Ensure we have a valid status code
    if (err instanceof ApiError) {
        obj.statusCode = err.statusCode || 400;  // Default to 400 if no status code is set
        obj.message = err.message;
        obj.stack = err.stack;
    } else {
        obj.statusCode = err.statusCode || 400;  // Default to 400 if no status code is set
        obj.message = err.message || "An unexpected error occurred.";
        obj.stack = err.stack;
    }

    // Send the error response with a valid status code
    res.status(obj.statusCode).json(obj);
};

module.exports = ErrorHandling;
