const APIKey = '34fac9256086cfc3e37efb11d46b6199';
// Coordinantes for Trier Germany 49.7496659116339, 6.636409678786817
const lat = 49.7496659116339;
const lon = 6.636409678786817;
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weatherIcon');
const captionDecs = document.querySelector('figcaption');
const url = 'https://api.openweather.org/data/2.5/weather?lat=49.7496659116339&lon=6.636409678786817&APPID=34fac9256086cfc3e37efb11d46b6199'

async function apiFetch() {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            console.log(data);
    } else {
        throw Error(await response.text());
    }
} catch (error) {
    console.log(error);
}
}

// function displayResults(data) {
//     currentTemp.innerHTML = `${data.temp}&deg;F`;
//     const inconsrc = `https://openweathermap.org/img/w/${}`;
//     let desc = data.weather[0].icon
// }

apiFetch();