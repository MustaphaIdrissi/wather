const apiKey = "ae815cd889230e9941f6da0d4007647a";

function getWeather() {
  const location = document.getElementById("location").value;
  if (location === "") {
    alert("Please enter a location");
    return;
  }

  const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  const hourlyForecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;
  const dailyForecastURL = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&cnt=15&appid=${apiKey}&units=metric`;

  fetch(currentWeatherURL)
    .then(response => response.json())
    .then(data => {
      document.getElementById("currentLocation").innerHTML = data.name;
      document.getElementById("current-icon").innerHTML = getWeatherIcon(data.weather[0].icon);
      document.getElementById("current-temp").innerHTML = `${Math.round(data.main.temp)}&deg;C`;
      document.getElementById("current-description").innerHTML = data.weather[0].description;
    })
    .catch(error => {
      alert("Could not fetch current weather data");
    });

  fetch(hourlyForecastURL)
    .then(response => response.json())
    .then(data => {
      const hourlyWeather = data.list.slice(0, 12).map(hour => {
        return `
          <div  class="day-water">
            <p>${getTime(hour.dt)}</p>
            <p class="weather-icon">${getWeatherIcon(hour.weather[0].icon)}</p>
            <p>${Math.round(hour.main.temp)}&deg;C</p>
          </div>
        `;
      }).join("");
      document.getElementById("hourly-weather").innerHTML = hourlyWeather;
    })
    .catch(error => {
      alert("Could not fetch hourly forecast data");
    });

  fetch(dailyForecastURL)
    .then(response => response.json())
    .then(data => {
      const dailyWeather = data.list.map(day => {
        return `
          <div class="weather-day">
            <p class="date">${getDate(day.dt)}</p>
            <p class="weather-icon">${getWeatherIcon(day.weather[0].icon)}</p>
            <p>${Math.round(day.temp.day)}&deg;C</p>
            <p>${day.weather[0].description}</p>
          </div>
        `;
      }).join("");
      document.getElementById("daily-weather").innerHTML = dailyWeather;
    })
    .catch(error => {
      alert("Could not fetch daily forecast data");
    });
}

function getWeatherIcon(iconCode) {
  return `<img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon">`;
}

function getTime(timestamp) {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

function getDate(timestamp) {
  const date = new Date(timestamp * 1000);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}