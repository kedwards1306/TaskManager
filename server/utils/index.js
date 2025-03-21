import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");

    }
    catch (error) {
        console.log("DB error: " + error);
    }
}
export default dbConnection;