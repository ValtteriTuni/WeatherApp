// Importing functions for displaying weather
import { setBackgroundColor } from './weatherDisplay.js';
import { kelvinToCelcius } from './degreeConverter.js';

// Function to fetch weather data using async/await
const fetchWeather = async () => {
  try {
    const city = document.getElementById('city-input').value; // Get the city name from the input box
    if (!city) {
      alert("City name is required");
      return;
    }

    const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`); // Call the server-side endpoint with the city query parameter
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json(); // Parse the response as JSON

    // Log the json data
    console.log(data);

    // Access the current realTemperature from the 'main' section and convert it to celcius.
    const realTemp = data.main.temp;
    const realTempInCelsius = kelvinToCelcius(realTemp);

    // Location
    const location = data.name;

    // Access the feels like temp and convert it to celcius.
    const feelsLikeTemp = data.main.feels_like;
    const feelsLikeCelcius = kelvinToCelcius(feelsLikeTemp);

    // Call the setBackgroundColor function on the realTemperature
    setBackgroundColor(realTempInCelsius);
    // Display the realTemperature on the webpage
    document.getElementById('current-temp').innerText = `Current temperature in ${location}: ${realTempInCelsius.toFixed(2)}°C`;
    document.getElementById('feels-like').innerText = `Feels like: ${feelsLikeCelcius.toFixed(2)}°C`;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    document.getElementById('weather-info').innerText = 'Error fetching weather data';
  }
}

// Event listener for the button click
document.getElementById('fetch-weather-btn').addEventListener('click', fetchWeather);