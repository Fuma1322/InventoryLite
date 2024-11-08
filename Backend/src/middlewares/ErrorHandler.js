const apiError = require("./utils/apiError")

const ErrorHandling = (err, req, res, next) => {
    const obj = {}
    if(err instanceof apiError) {
        obj['statusCode'] = err.statusCode
        obj['message'] = err.message
        obj['stack'] = err.stack
    }
    else{
        obj['statusCode'] = 400
        obj['message'] = err.message
        obj['stack'] = err.stack

    }
    res.status(obj.statusCode).json(obj)
}
module.exports = ErrorHandling