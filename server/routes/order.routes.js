import express from "express";
import {
  createOrder,
  getMyOrders,
  getOrderById,
  getAllOrders,
  cancelOrder,
} from "../controllers/order.controller.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

router.post("/", requireAuth, createOrder);
router.get("/", requireAuth, getMyOrders);
router.get("/:id", requireAuth, getOrderById);
router.get("/admin", requireAuth, getAllOrders);
router.put("/:id", requireAuth, cancelOrder);

export default router;
