import bcrypt from "bcryptjs";

export const encryptPassword = async (password) => {
  
    const hashedPassword = await bcrypt.hash(password, 8)

    return hashedPassword
}

export const verifyHashedPassword = async (password, passwordHashed) => {
  
    const isCorrect = await bcrypt.compare(password, passwordHashed)

    return isCorrect
}
