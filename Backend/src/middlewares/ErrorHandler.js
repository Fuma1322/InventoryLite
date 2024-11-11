const ApiError = require('../utils/ApiError');

const ErrorHandling = (err, req, res, next) => {
  const obj = {};

  // Check if the error is an instance of ApiError
  if (err instanceof ApiError) {
    obj.statusCode = err.statusCode || 500; // Default to 500 if no statusCode is set
    obj.message = err.message || "Something went wrong";
    obj.stack = process.env.NODE_ENV === 'development' ? err.stack : undefined; // Include stack only in development
  } else {
    // For general errors
    obj.statusCode = err.statusCode || 400; // Default to 400 if no statusCode is set
    obj.message = err.message || "An unexpected error occurred";
    obj.stack = process.env.NODE_ENV === 'development' ? err.stack : undefined; // Include stack only in development
  }

  // Send response with statusCode and message
  res.status(obj.statusCode).json({
    success: false,
    message: obj.message,
    ...(obj.stack && { stack: obj.stack }) // Include stack trace if available
  });
};

module.exports = ErrorHandling;
