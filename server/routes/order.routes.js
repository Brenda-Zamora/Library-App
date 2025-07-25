import express from "express";
import {
  createOrder,
  getMyOrders,
  getOrderById,
  deleteOrder,
  getAllOrders,
  cancelOrder,
} from "../controllers/order.controller.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

router.post("/", requireAuth, createOrder);
router.get("/", requireAuth, getMyOrders);
router.get("/:id", requireAuth, getOrderById);
router.delete("/:id", requireAuth, deleteOrder);
router.get("/admin", requireAuth, getAllOrders);
router.put("/:id/cancel", requireAuth, cancelOrder);

export default router;
