import Book from "../models/book.model.js";

// Add a new book
export const addBook = async (req, res) => {
  try {
    console.log("Adding book:", req.body);
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    console.error("Error:", err.message);
    res.status(400).json({ error: err.message });
  }
};

// Get all books
export const getBooks = async (req, res) => {
  try {
    console.log("Fetching all books");
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    console.error("Error fetching books:", err.message);
    res.status(500).json({ error: "Error fetching books" });
  }
};

// Get a book by ID
export const getBookById = async (req, res) => {
  try {
    console.log("Fetching book with ID:", req.params.id);
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
  } catch (err) {
    console.error("Error fetching book:", err.message);
    res.status(500).json({ error: "Error fetching book" });
  }
};

// Update a book by ID
export const updateBook = async (req, res) => {
  try {
    console.log("Updating book with ID:", req.params.id);
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
  } catch (err) {
    console.error("Error updating book:", err.message);
    res.status(400).json({ error: err.message });
  }
};

// Delete a book by ID
export const deleteBook = async (req, res) => {
  try {
    console.log("Deleting book with ID:", req.params.id);
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    console.error("Error deleting book:", err.message);
    res.status(500).json({ error: "Error deleting book" });
  }
};
