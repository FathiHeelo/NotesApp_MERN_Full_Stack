import NotesRouter from "./router/NotesRouter.js";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import { rateLimiter } from "./middleware/RateLimiter.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(rateLimiter);

app.use((req, res, next) => {
  console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
  next();
});

app.use("/api/Notes", NotesRouter);

connectDB()
  .then(() => {
    app.listen(5001, () => {
      console.log("Server is running on port 5001");
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error.message);
  });