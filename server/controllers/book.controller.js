import Book from "../models/book.model.js";

// 🔹 Crear un nuevo libro
export const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 🔹 Obtener todos los libros
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener los libros" });
  }
};

// 🔹 Obtener un libro por ID
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Libro no encontrado" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: "Error al buscar el libro" });
  }
};

// 🔹 Actualizar un libro por ID
export const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) return res.status(404).json({ error: "Libro no encontrado" });
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 🔹 Eliminar un libro por ID
export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ error: "Libro no encontrado" });
    res.json({ message: "Libro eliminado con éxito" });
  } catch (err) {
    res.status(500).json({ error: "Error al eliminar el libro" });
  }
};
