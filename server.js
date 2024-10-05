// server.js

const express = require('express');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Endpoint to fetch weather data
app.get('/api/weather', async (req, res) => {
  // API-key
  const apiKey = process.env.API_KEY;

  // City name
  const city = req.query.city;
  if (!city) {
    return res.status(400).json({ error: 'City name is required' });
  }
  // API-url
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

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