// server.js

// Import required modules
const express = require("express");
const dotenv = require("dotenv");

// Configure environment variables
dotenv.config();

// Initialize the Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define a simple route
app.get("/", (req, res) => {
  res.send("Welcome to Node.js Setup!");
});

// Environment variables or defaults
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
