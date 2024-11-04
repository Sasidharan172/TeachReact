function flipWidget() {
  const widget = document.getElementById("widget");
  widget.classList.toggle("flipped");
}

async function updateDetails(data) {
  // Details
  const location = document.getElementById("location");
  const weatherStatus = document.getElementById("weatherStatus");
  const temp = document.getElementById("temp");

  const humidity = document.getElementById("humidity");
  const wind = document.getElementById("wind");

  location.textContent = `${data.name}`;
  weatherStatus.textContent = `${data.weather[0].description}`;
  temp.textContent = `${data.main.temp}°C`;

  humidity.textContent = `${data.main.humidity}%`;
  wind.textContent = `${data.wind.speed}kps`;
}

async function handleSearch(event) {
  if (event.key === "Enter") {
    try {
      const currentInput = document.getElementById("searchInput").value.trim();

      // Request for weather data
      const response = await fetch(`/api/weather?location=${currentInput}`);
      const data = await response.json();

      updateDetails(data);

      flipWidget();
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }

    // updateWeather(randomCondition);
  }
}
