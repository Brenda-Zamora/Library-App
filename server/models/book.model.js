import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    author: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    stock: {
      type: Number,
      required: true,
      min: 0,
      default: 1,
    },

    available: {
      type: Boolean,
      default: true,
    },

    image: {
      type: String, // URL or path to the image
      default: "",
    },
  },
  {
    timestamps: true, // automatically manage createdAt and updatedAt fields
  }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
