import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/database.js";

dotenv.config({
  path: "../.env",
});

console.log("URI exists:", !!process.env.MONGODB_URI);
console.log("URI starts with mongodb:", process.env.MONGODB_URI?.startsWith("mongodb"));
console.log("URI first 15 characters:", process.env.MONGODB_URI?.substring(0, 15));

const app = express();

const startServer = async () => {
  try {
    await connectDB();

    app.listen(process.env.PORT || 8000, () => {
      console.log(
        `Server is running on port: ${process.env.PORT || 8000}`
      );
    });
  } catch (error) {
    console.log("MongoDB connection failed:", error.message);
  }
};

startServer();