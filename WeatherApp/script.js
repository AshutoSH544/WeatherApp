async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '78dfaefbf14b37b94f352b17a3d93f68';  // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    document.getElementById('weatherResult').innerHTML = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${main.temp} °C</p>
        <p>Humidity: ${main.humidity} %</p>
        <p>Condition: ${weather[0].description}</p>
    `;
}
