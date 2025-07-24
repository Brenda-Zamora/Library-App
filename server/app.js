import express from "express";
import cors from "cors";
import config from "./config/config.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bookRoutes from "./routes/book.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// DB connection
mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the database!"))
  .catch((err) => console.error("DB error:", err));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio application." });
});

// Routes
app.use("/api/books", bookRoutes);
// app.use("/api/auth", authRoutes);

export default app;
