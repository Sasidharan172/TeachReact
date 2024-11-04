const express = require("express");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const API_KEY = process.env.OWA_API_KEY;

// Serve static files from the "public" directory
app.use(express.static("public"));

// Create an API route to send the API key to the frontend
app.get("/api/weather", async (req, res) => {
  console.log("hello");
  const location = req.query.location;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`,
  );
  const data = await response.json();
  res.json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
