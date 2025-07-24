import express from "express";
import {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} from "../controllers/book.controller.js";

const router = express.Router();

// Crear un libro
router.post("/", createBook);

// Obtener todos los libros
router.get("/", getBooks);

// Obtener un libro por ID
router.get("/:id", getBookById);

// Actualizar un libro
router.put("/:id", updateBook);

// Eliminar un libro
router.delete("/:id", deleteBook);

export default router;
