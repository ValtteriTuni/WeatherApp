// server.js

const express = require('express');
//const fetch = require('node-fetch');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Endpoint to fetch weather data
app.get('/api/weather', async (req, res) => {
  const apiKey = process.env.API_KEY;
  const lat = 61.49911; // Tampere latitude
  const lon = 23.78712; // Tampere longitude
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Error fetching weather data' });
    }
    const data = await response.json();
    res.json(data); // Send the weather data back to the client
  } catch (error) {
    res.status(500).json({ error: 'Server error while fetching weather data' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});