import express from "express";
import {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
  updateCartItem,
  getCartItemCount,
  getCartTotal,
} from "../controllers/cart.controller.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", requireAuth, getCart);
router.post("/", requireAuth, addToCart);
router.delete("/:bookId", requireAuth, removeFromCart);
router.delete("/", requireAuth, clearCart);
router.put("/:bookId", requireAuth, updateCartItem);
router.get("/count", requireAuth, getCartItemCount);
router.get("/total", requireAuth, getCartTotal);

export default router;
