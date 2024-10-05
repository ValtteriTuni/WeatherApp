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

  export {setBackgroundColor};