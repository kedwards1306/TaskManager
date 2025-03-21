import express from 'express';
import {
    registerUser,
    loginUser,
    logoutUser,
    getTeamList,
    getNotificationList,
    updateUserProfile,
    readNotifications,
    updateUserPassword,
    activateUserProfile,
    deleteUserProfile
} from './controllers/userController.js';
import { protectRoute, isAdminRoute } from '../middleware/authMiddleware.js';


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
// router.post("/logout", logoutUser);

// router.get("/get-team", protectRoute, getTeamList);
// router.get("/noticification", protectRoute, getNotificationList);


// router.put("/profile", protectRoute, updateUserProfile);
// router.put("/read-notif", protectRoute, readNotifications);
// router.put("/update-password", protectRoute, updateUserPassword);

// //for admin
// router.route("/:id")
//     .put(protectRoute, isAdminRoute, activateUserProfile)
//     .delete(protectRoute, isAdminRoute, deleteUserProfile);

export default router;