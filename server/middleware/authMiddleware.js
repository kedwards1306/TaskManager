import jwt from 'jsonwebtoken';
import User from "../models/user.js";

const protectRoute = async (req, res, next) => {
    try {
        let token = req.cookie.token;
        if (token) {
            const decodeToken = jwt.verify(token, process.env.JWT_KEY);

            const resp = await User.findById(decodeToken.userId).select("IsAdmin email");
            req.user = {
                email: resp.email,
                isAdmin: resp.isAdmin,
                userId: decodeToken.userId,
            };
            next();
        }

    } catch (error) {
        console.log(error);
        return res.status(401).json({ status: false, message: "Not authorize. Please log in again." });
    }
};
const isAdminRoute = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        return res.status(401).json({
            status: false,
            message: "Not authorized as admin. Try login as admin.",
        });
    }
};
export  { protectRoute, isAdminRoute };