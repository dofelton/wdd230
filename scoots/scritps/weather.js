const APIKey = '34fac9256086cfc3e37efb11d46b6199';
const weatherCard = document.querySelector('.weather');
const url = "https://api.openweathermap.org/data/2.5/weather?lat=20.4773&lon=-86.9734&appid=34fac9256086cfc3e37efb11d46b6199&units=imperial"

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
    let temp = document.createElement('p');
    let humidity = document.createElement('p');
    let nextTemp = document.createElement('p');

    temp.innerHTML = `Current Temperature: ${Math.round(data.main.temp)}&deg;F`;
    humidity.innerHTML = `Current Humidity: ${data.main.humidity}`;
    // nextTemp.innerHTML = `Tomorrow's Temperature: ${Math.round(data.)}`

    weatherCard.appendChild(temp);
    weatherCard.appendChild(humidity);
}