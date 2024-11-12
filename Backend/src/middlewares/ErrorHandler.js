const ApiError = require("../utils/ApiError");

const ErrorHandling = (err, req, res, next) => {
    const obj = {};
    if (err instanceof ApiError) {
        obj['statusCode'] = err.statusCode;
        obj['message'] = err.message;
        obj['stack'] = err.stack;
    } else {
        obj['statusCode'] = 400;
        obj['message'] = err.message;
        obj['stack'] = err.stack;
    }

    // Use obj instead of error
    res.status(obj.statusCode || 500).json({
        message: obj.message || 'An internal server error occurred',
        stack: obj.stack, // optional, for debugging purposes
    });
};

module.exports = ErrorHandling;