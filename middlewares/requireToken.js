import { verifyToken } from "../utils/jwt.js"
import { handleError } from "../utils/messageRequest.js"

export const requireToken = async (req, res, next) => {
  try {

    let token = req.headers?.authorization || ''

    if (!token) {
      return handleError(res, 404, "JWT_DOES_NOT_EXISTS")
    }

    token = token.split(" ")[1]

    const payload = await verifyToken(token)

    req.uid = payload.uid

    next()
  } catch (error) {
    return handleError(res, 500, "INVALID_SESSION") 
  }
}