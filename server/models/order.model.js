import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    books: [
      {
        book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
        quantity: Number,
      },
    ],
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "completed", "cancelled"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
