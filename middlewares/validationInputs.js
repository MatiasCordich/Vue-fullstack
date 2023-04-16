import { validationResult } from "express-validator";
import { body } from "express-validator"

export const validationInputs = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    next()
}

export const bodyLoginValidator = [
  body("email", "Formato de email incorrecto")
    .trim()
    .isEmail()
    .normalizeEmail(),
  body("password", "Minimo 6 caracteres").trim().isLength({ min: 6 })
]

export const bodyRegisterValidator =  [
  body("email", "Formato de email incorrecto")
    .trim()
    .isEmail()
    .normalizeEmail(),
  body("password", "Minimo 6 caracteres").trim().isLength({ min: 6 }),
  body("password", "Formato de password incorrecta").custom(
    (value, { req }) => {
      if (value !== req.body.repassword) {
        throw new Error("No coinciden las passwords");
      }
      return value;
    }
  ),
]