const APIKey = '34fac9256086cfc3e37efb11d46b6199';
const weatherCard = document.querySelector('.weather');

const url = "https://api.openweathermap.org/data/2.5/forecast?lat=20.4773&lon=-86.9734&appid=34fac9256086cfc3e37efb11d46b6199&units=imperial";

async function apiFetch() {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            // console.log(data);
            displayResults(data);
            displayBanner(data);
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

    temp.innerHTML = `Current Temperature:<br>${Math.round(data.list[0].main.temp)}&deg;F`;
    humidity.innerHTML = `Current Humidity:<br>${data.list[0].main.humidity}`;
    data.list[0].weather.forEach(weather => {
        let icon = document.createElement('img');
        let description = document.createElement('p');
        let desc = weather.description;
        description.textContent = `${titleCase(desc)}`;
        const iconsrc = `https://openweathermap.org/img/w/${weather.icon}.png`;
        icon.setAttribute('src', iconsrc);
        icon.setAttribute('alt', desc);
        weatherCard.appendChild(icon);
        weatherCard.appendChild(description);
    })
    weatherCard.appendChild(temp);
    weatherCard.appendChild(humidity);
    let instance = 1;
    data.list.forEach(forecast => {
        if (forecast.dt_txt.includes('15:00:00')) {
            if (instance == 2 ) {
                let forecastTemp = document.createElement('p');
                forecastTemp.innerHTML = `Tomorrow's Temperature:<br>${Math.round(forecast.main.temp)}℉`
                weatherCard.appendChild(forecastTemp);
            }
            instance += 1;
        }
    })
}

function displayBanner(data) {
    const banner = document.querySelector('.banner');
    let maxTemp = document.createElement('h3');

    maxTemp.innerHTML = `Today's high temperature will be ${Math.round(data.list[0].main.temp_max)}℉`
    banner.appendChild(maxTemp);
}

const bannerButton = document.querySelector('#menu');
const banner = document.querySelector('.banner');

bannerButton.addEventListener("click", () => {
	banner.classList.toggle("open");
	bannerButton.classList.toggle("open");
});


function titleCase(string) {
    string = string.split(' ');
    for (let i=0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }
    return string.join(' ');
}