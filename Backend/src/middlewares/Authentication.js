const ApiError = require("../utils/ApiError")
const { validateToken } = require("../utils/Token.utils")

const Authentication = (req,res,next ) => {
    try{
         const headers = req.headers['authorization'] || ''
         if(!headers){
            throw new ApiError(httpStatus.UNAUTHORIZED,"Please login first")
         }
         const auth_token = headers.split("")[1]

         if(!auth_token){
            throw new ApiError(httpStatus.UNAUTHORIZED,"please provide valid ");
         }
         const data = validateToken(auth_token)
         req.user = data.userid
         next()
        }
        catch(error) {
            next(error)
        }
}
