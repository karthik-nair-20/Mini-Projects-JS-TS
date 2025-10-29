document.addEventListener("DOMContentLoaded", function() {
  const cityInput = document.getElementById("location-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const apiKey = "03b585d2fc8a80486bce3240754f329e";

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if(!city) return;
    try {
      const weather = await fetchWeatherData(city);
      displayWeatherData(weather);
    } catch(err) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    if(!response.ok) {
      errorMessage.textContent = "City not found";
      showError();
      return null;
    }
    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    cityNameDisplay.textContent = data.name;
    temperatureDisplay.textContent = `${data.main.temp} °C`;
    descriptionDisplay.textContent = data.weather[0].description;
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }


  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
})