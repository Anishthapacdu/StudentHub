// Data structure holding weather information for each city
const cityWeatherInfo = {
    Melbourne: "Changeable conditions with a high of 21°C. Partly sunny with a possibility of quick showers in the late afternoon",
    Darwin: "Hot and humid with a high of 32°C. Chance of thunderstorms in the afternoon.",
    Sydney: "Mild temperatures with a high of 25°C. Sunny skies throughout the day.",
    Brisbane: "Warm with a high of 28°C. Possible showers in the evening.",
    Hobart: "Cool temperatures with a high of 20°C. Mostly cloudy.",
    Perth: "Hot with a high of 35°C. Clear skies.",
    Queensland: "Tropical weather with a high of 30°C. High humidity.",
    Adelaide: "Moderate temperatures with a high of 22°C. Partly cloudy.",
    Canberra: "Mild with a high of 23°C. Chance of rain in the afternoon.",
    Newcastle: "Warm with a high of 27°C. Sunny."
  };
  
  // Function to show details in a popup for the clicked city
  function showDetails(cityName) {
    // Fetch the weather info for the given city
    const weatherInfo = cityWeatherInfo[cityName];
  
    // Update the popup with the city name and its weather information
    document.getElementById('city-name').textContent = cityName;
    document.getElementById('weather-info').textContent = weatherInfo;
  
    // Display the popup, ensuring it's not minimized if previously was
    const popup = document.getElementById('details-popup');
    popup.style.display = 'block';
    popup.classList.remove('minimized'); // Ensure popup is restored if it was minimized before
  }
  
  // Function to just hide the popup without changing its state
  function hideDetails() {
    document.getElementById('details-popup').style.display = 'none';
  }
  
  // Function to minimize the popup
  function minimizePopup() {
    document.getElementById('details-popup').classList.add('minimized');
  }
  
  // Function to restore the popup
  function restorePopup() {
    document.getElementById('details-popup').classList.remove('minimized');
  }
  