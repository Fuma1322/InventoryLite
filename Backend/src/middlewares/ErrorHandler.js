const ApiError = require('../utils/ApiError'); // Adjust the path as needed

const ErrorHandling = (err, req, res, next) => {
  // Initialize the error response object
  const obj = {
    statusCode: err instanceof ApiError ? err.statusCode || 500 : 400,
    message: err.message || "An unexpected error occurred",
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  };

  // Set response status and return error details
  res.status(obj.statusCode).json({
    success: false,
    message: obj.message,
    ...(obj.stack && { stack: obj.stack }) // Include stack trace if in development mode
  });
};

module.exports = ErrorHandling;
