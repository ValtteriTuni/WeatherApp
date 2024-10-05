// Function to fetch weather data using async/await
const fetchWeather = async () => {
  try {
    const response = await fetch('/api/weather'); // Call the server-side endpoint
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json(); // Parse the response as JSON

    // Log the json data
    console.log(data);
    // Access the current temperature from the 'main' section
    const temp = data.main.temp;

    // Convert Kelvin to Celsius if needed
    const tempCelsius = temp - 273.15;

    // Call the setBackgroundColor function on the temperature
    setBackgroundColor(tempCelsius);
    // Display the temperature on the webpage
    document.getElementById('weather-info').innerText = `Current Temperature: ${tempCelsius.toFixed(2)}°C`;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    document.getElementById('weather-info').innerText = 'Error fetching weather data';
  }
}

// Event listener for the button click
document.getElementById('fetch-weather-btn').addEventListener('click', fetchWeather);

// Function to set background color based on temperature
const setBackgroundColor = (tempCelsius) => {
  if (tempCelsius < 0) {
    document.getElementById('weather-info').style.backgroundColor = "blue";
  } else if (tempCelsius > 20) {
    document.getElementById('weather-info').style.backgroundColor = "red";
  } else {
    document.getElementById('weather-info').style.backgroundColor = "yellow";
  }
}