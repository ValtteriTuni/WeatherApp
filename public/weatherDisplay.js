/* weatherDisplay.js */

// Function to set background color based on temperature
const setBackgroundColor = (tempCelsius) => {
    const weatherInfoBox = document.querySelector('.box');
    if (tempCelsius < 0) {
        weatherInfoBox.style.backgroundColor = "blue";
    } else if (tempCelsius > 20) {
        weatherInfoBox.style.backgroundColor = "red";
    } else {
        weatherInfoBox.style.backgroundColor = "yellow";
    }
}


  export {setBackgroundColor};