async function getWeather() {
   let location = document.getElementById("location").value;
   const apiKey = ""; // openweathermap.org API key goes here
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;


   let response = await fetch(url)

   if (response.ok) {
      let json = await response.json()
      .then(data => {
         const { temp, feels_like } = data.main;
         const weatherDescription = data.weather[0].description;
         const weatherId = data.weather[0].id;
         const cityName = data.name;
         const country = data.sys.country;

         const weatherDisplay = `The current weather in ${cityName}, ${country}: ${weatherDescription}, ${temp}°C (feels like ${feels_like}°C)`;

         document.getElementById("weather").textContent = weatherDisplay;
      })
      
   } else {
      alert("HTTP-error: " + response.status)
   }
}