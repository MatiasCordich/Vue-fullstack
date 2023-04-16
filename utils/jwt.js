import jwt from "jsonwebtoken";

export const generateToken = async (id) => {
  const token = jwt.sign({ uid: id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return token;
};

export const verifyToken = async (token) => {
  const isVerified = jwt.verify(token, process.env.JWT_SECRET);

  return isVerified;
};
