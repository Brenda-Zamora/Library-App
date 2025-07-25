import express from "express";
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getMyProfile,
  updateMyProfile,
} from "../controllers/user.controller.js";
import { requireAuth } from "../middleware/auth.js";
import { isAdmin } from "../middleware/admin.js";

const router = express.Router();

// User routes
router.get("/", requireAuth, isAdmin, getAllUsers);

// User routes by ID (just for admin)
router.get("/:id", requireAuth, isAdmin, getUserById);
router.put("/:id", requireAuth, isAdmin, updateUser);
router.delete("/:id", requireAuth, isAdmin, deleteUser);

// Profile routes
router.get("/me", requireAuth, getMyProfile);
router.put("/me", requireAuth, updateMyProfile);

export default router;
