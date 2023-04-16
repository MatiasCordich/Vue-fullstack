import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("DB conectada")
} catch (error) {
    console.log("ERROR de conexion")
}

