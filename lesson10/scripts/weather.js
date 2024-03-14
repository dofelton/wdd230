const APIKey = '34fac9256086cfc3e37efb11d46b6199';
// 0dc2835c1f834a1874a6f13e7e20ccc9
// Coordinantes for Trier Germany 49.7496659116339, 6.636409678786817
const lat = 49.7496659116339;
const lon = 6.636409678786817;
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weatherIcon');
const captionDecs = document.querySelector('figcaption');
const url = "https://api.openweathermap.org/data/2.5/weather?lat=32.7668&lon=-96.7836&appid=0dc2835c1f834a1874a6f13e7e20ccc9&units=imperial"

async function apiFetch() {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            console.log(data);
            displayResults(data);
    } else {
        throw Error(await response.text());
    }
} catch (error) {
    console.log(error);
}
}

function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    const inconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    // let desc = data.weather[0].icon
    desc.textContent = `- ${(data.weather[0].description)}`;
    weatherIcon.setAttribute('src', inconsrc);
    weatherIcon.setAttribute('alt', desc);
}

apiFetch();

// https://codepen.io/Michael-Bourdet/pen/OJGRyWy