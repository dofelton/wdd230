let temperature = document.getElementById("temp").innerText;
let windspeed = document.querySelector('#wind').innerText;
let windChill = document.querySelector('#windChill');
temperature = Number(temperature);
windspeed = Number(windspeed);

if (temperature <= 50 && windspeed > 3) {
    windChill.textContent = `${calcWindChill(windspeed, temperature).toFixed(1)}℉`;
} else {
    windChill.textContent = "N/A";
}

function calcWindChill (windSpeed, temperature) {
    let windChill = 35.74 + (0.6215* temperature) - (35.75 * (windspeed ** .16)) + (0.4275 * temperature * (windspeed ** .16));
    return windChill;
}