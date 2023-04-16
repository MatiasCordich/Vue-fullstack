import { encryptPassword, verifyHashedPassword } from "../utils/bcrypt.js"
import { User } from "../models/User.js"
import { generateToken } from "../utils/jwt.js"

export const registerNewUser = async (email, password) => {

    const isExists = await User.findOne({email})

    if(isExists) return "USER_ALREADY_EXISTS"
    
    const hashedPassword = await encryptPassword(password)

    const newUser = await User.create({
        email, 
        password: hashedPassword
    }) 

    return newUser
}

export const loginUser = async (email, password) => {

    const user = await User.findOne({email})

    if(!user) return "USER_NOT_FOUND"
    
    const userHashedPassword = user.password

    const isCorrect = await verifyHashedPassword(password, userHashedPassword)

    if(!isCorrect) return "PASSWORD_INCORRECT"

    const token = await generateToken(user._id)

    const userInfo = {
        token, 
        user
    }

    return userInfo
}
