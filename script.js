const input = document.querySelector('input');
const btn = document.getElementById('btn');
const icon = document.querySelector('.icon');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');


btn.addEventListener("click", function() {
    city = input.value;
    getWeather(city);
})

function getWeather(city){
    console.log(city)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'a2169bbd35ac039bdcf0c81869cde490'}`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        const iconCode = data.weather[0].icon;
        icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon"/>`;

        const weatherCity = data.name;
        const weatherCountry = data.sys.country
        weather.innerHTML = `${weatherCity}, ${weatherCountry}` 

        const weatherTemp = Math.round(data.main.temp - 273.15);
        temperature.innerHTML = `${weatherTemp}°C`

        const weatherDescription = data.weather[0].description;
        description.innerHTML = `${weatherDescription}`
            })
}