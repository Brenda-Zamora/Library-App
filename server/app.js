import express from "express";
import cors from "cors";
import config from "./config/config.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bookRoutes from "./routes/book.routes.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import wishlistRoutes from "./routes/wishlist.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// DB connection
mongoose
  .connect(config.mongoUri)
  .then(() => console.log("Connected to the database!"))
  .catch((err) => console.error("DB error:", err));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Library App." });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/wishlist", wishlistRoutes);

export default app;
