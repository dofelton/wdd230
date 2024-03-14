const lat = 32.90274968930471;
const lon = -96.56388689950292;
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weatherIcon');
const captionDecs = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={34fac9256086cfc3e37efb11d46b6199}'

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