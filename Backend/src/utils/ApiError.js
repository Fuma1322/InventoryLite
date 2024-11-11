class ApiError extends Error {
  constructor(statusCode, msg) {
    super(msg); // Call parent constructor
    this.statusCode = statusCode || 500; // Ensure that statusCode is always defined
    this.message = msg; // Set the error message
    Error.captureStackTrace(this, this.constructor); // Capture the stack trace
  }
}

module.exports = ApiError;
