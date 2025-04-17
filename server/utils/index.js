import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");

    }
    catch (error) {
        console.log("DB error: " + error);
    }
};
export const createJwt = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_KEY, {
        expiresIn: "1d",
    });

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict", //prevent CSRF attack
        maxAge: 1 * 24 * 60 * 60 * 1000, //1 day
      });
    
};
