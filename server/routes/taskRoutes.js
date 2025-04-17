import express from 'express';
import {
    createTask,
    duplicateTask,
    postTaskActivity,
    getTasks,
    createSubTask,
    updateTask,
    trashTask,
    deleterestoreTask
} from "../controller/taskController.js";
import { isAdminRoute, protectRoute } from '../middleware/authMiddleware.js';


const router = express.Router();
router.post("/create", protectRoute, isAdminRoute, createTask);
// router.post("/duplicate:id", protectRoute, isAdminRoute, duplicateTask);
// router.post("/activity:id", protectRoute, isAdminRoute, postTaskActivity);


// router.get("/", protectRoute, getTasks);
// router.get("/:id", protectRoute, getTasks);

// router.put("/create-subtask/:id", protectRoute, isAdminRoute, createSubTask);
// router.put("/update/:id", protectRoute, isAdminRoute, updateTask);
// router.put("/:id", protectRoute, isAdminRoute, trashTask);

// router.delete("/delete-restore", protectRoute, isAdminRoute, deleterestoreTask);



export default router;
