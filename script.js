const input = document.querySelector('input');
const btn = document.getElementById('btn');
const icon = document.querySelector('.icon');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');

btn.addEventListener("click", function() {
    const city = input.value;
    getWeather(city);
});

async function getWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a2169bbd35ac039bdcf0c81869cde490&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found. Please check the spelling.");
        }

        const data = await response.json();

        const iconCode = data.weather[0].icon;
        icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon"/>`;

        weather.innerHTML = `${data.name}, ${data.sys.country}`;
        temperature.innerHTML = `${Math.round(data.main.temp)}°C`;
        description.innerHTML = `${data.weather[0].description}`;

    } catch (error) {
        icon.innerHTML = "";
        weather.innerHTML = "";
        temperature.innerHTML = "";
        description.innerHTML = error.message;
    }
}