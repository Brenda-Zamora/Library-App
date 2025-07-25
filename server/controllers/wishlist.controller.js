import Wishlist from "../models/wishlist.model.js";

// Create or update wishlist
export const addToWishlist = async (req, res) => {
  const { bookId } = req.body;
  try {
    let wishlist = await Wishlist.findOne({ user: req.user._id });
    if (!wishlist) {
      wishlist = await Wishlist.create({ user: req.user._id, books: [bookId] });
    } else if (!wishlist.books.includes(bookId)) {
      wishlist.books.push(bookId);
      await wishlist.save();
    }
    res.json(wishlist);
  } catch (err) {
    res.status(500).json({ error: "Error adding book to wishlist" });
  }
};

export const getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user._id }).populate(
      "books"
    );
    res.json(wishlist);
  } catch (err) {
    res.status(500).json({ error: "Error fetching wishlist" });
  }
};

export const removeFromWishlist = async (req, res) => {
  const { bookId } = req.params;
  try {
    const wishlist = await Wishlist.findOneAndUpdate(
      { user: req.user._id },
      { $pull: { books: bookId } },
      { new: true }
    );
    res.json(wishlist);
  } catch (err) {
    res.status(500).json({ error: "Error removing book from wishlist" });
  }
};

export const clearWishlist = async (req, res) => {
  try {
    await Wishlist.findOneAndDelete({ user: req.user._id });
    res.json({ message: "Wishlist cleared" });
  } catch (err) {
    res.status(500).json({ error: "Error clearing wishlist" });
  }
};
