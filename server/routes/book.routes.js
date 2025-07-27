import express from "express";
import {
  addBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} from "../controllers/book.controller.js";
import { requireAuth } from "../middleware/auth.js";
import { isAdmin } from "../middleware/admin.js";

const router = express.Router();

// Routes for book operations
router.post("/", requireAuth, isAdmin, addBook);
router.get("/", getBooks);

// Routes for individual book operations
router.get("/:id", getBookById);
router.put("/:id", requireAuth, isAdmin, updateBook);
router.delete("/:id", requireAuth, isAdmin, deleteBook);

export default router;
