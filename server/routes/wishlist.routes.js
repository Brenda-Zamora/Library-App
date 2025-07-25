import express from "express";
import {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
  clearWishlist,
} from "../controllers/wishlist.controller.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", requireAuth, getWishlist);
router.post("/", requireAuth, addToWishlist);
router.delete("/", requireAuth, clearWishlist);
router.delete("/:bookId", requireAuth, removeFromWishlist);

export default router;
