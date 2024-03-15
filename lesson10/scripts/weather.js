const APIKey = '34fac9256086cfc3e37efb11d46b6199';
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
apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    console.log(iconsrc);
    let desc = data.weather[0].description;
    console.log(desc);
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDecs.textContent = `${titleCase(desc)}`;
}

function titleCase(string) {
    string = string.split(' ');
    for (let i=0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }
    return string.join(' ');
}

// https://codepen.io/Michael-Bourdet/pen/OJGRyWy