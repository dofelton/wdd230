const APIKey = '34fac9256086cfc3e37efb11d46b6199';
const lat = 32.9029;
const lon = -96.5639;
const weatherCard = document.querySelector('.weather');
const url = "https://api.openweathermap.org/data/2.5/weather?lat=32.9029&lon=-96.5639&appid=34fac9256086cfc3e37efb11d46b6199&units=imperial"

async function apiFetch() {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            // console.log(data);
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
    let description = document.createElement('p');
    let icon = document.createElement('img');
    let fcTitle = document.createElement('h3');
    
    temp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    let desc = data.weather[0].description;
    description.textContent = `${titleCase(desc)}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', desc);
    fcTitle.textContent = '3-day Forecast';

    weatherCard.appendChild(temp);
    weatherCard.appendChild(description);
    weatherCard.appendChild(icon);
    weatherCard.appendChild(fcTitle);
}

function titleCase(string) {
    string = string.split(' ');
    for (let i=0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }
    return string.join(' ');
}
