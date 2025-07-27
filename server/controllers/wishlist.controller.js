import Wishlist from "../models/wishlist.model.js";
import mongoose from "mongoose";

export const addToWishlist = async (req, res) => {
  const { bookId } = req.body;
  console.log("Adding to wishlist:", bookId);

  if (!mongoose.Types.ObjectId.isValid(bookId)) {
    return res.status(400).json({ error: "Invalid book ID" });
  }

  const bookObjectId = new mongoose.Types.ObjectId(bookId);

  let wishlist = await Wishlist.findOne({ user: req.user._id });

  if (!wishlist) {
    wishlist = await Wishlist.create({
      user: req.user._id,
      books: [bookObjectId],
    });
  } else {
    wishlist.books = wishlist.books.filter((id) => id); // limpiar nulls si hay
    const alreadyInWishlist = wishlist.books.some((id) =>
      id.equals(bookObjectId)
    );
    if (!alreadyInWishlist) {
      wishlist.books.push(bookObjectId);
      await wishlist.save();
    }
  }

  res.json(wishlist);
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
