import { loginUser, registerNewUser } from "../services/auth.services.js";
import { handleError, handleSuccess } from "../utils/messageRequest.js";
import { User } from "../models/User.js";

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await loginUser(email, password);

    if (response === "USER_NOT_FOUND") {
      return handleError(res, 404, response);
    } else if (response === "PASSWORD_INCORRECT") {
      return handleError(res, 500, response);
    }
    return handleSuccess(res, 200, "LOGIN_SUCCESS", response);
  } catch (error) {
    return handleError(res, 505, "ERROR_LOGIN");
  }
};

export const registerController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await registerNewUser(email, password);

    if (response === "USER_ALREADY_EXISTS") {
      return handleError(res, 500, response);
    }

    return handleSuccess(res, 202,"REGISTER_SUCCESS", response);
  } catch (error) {
    return handleError(res, 505, "ERROR_REGISTER");
  }
};

export const infoUser = async (req, res) => {
  try {
    const user = await User.findById(req.uid)
    res.json({user})
  } catch (error) {
    
  }
  
}