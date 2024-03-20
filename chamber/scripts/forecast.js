const forecastCard = document.querySelector('.forecast');
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=32.9029&lon=-96.5639&appid=34fac9256086cfc3e37efb11d46b6199&units=imperial"

async function apiFetch() {
    try {
        let response = await fetch(forecastUrl);
        if (response.ok) {
            let forecastdata = await response.json();
            // console.log(data);
            displayForecast(forecastdata);
    } else {
        throw Error(await response.text());
    }
} catch (error) {
    console.log(error);
}
}

apiFetch();


// forcast = (data.dt_text.includes('15:00:00'));
// console.log(forecast);
let occurance = 1;
function displayForecast(forecastdata) {
    // console.log(data);
    forecastdata.list.forEach(forecast => {
        // console.log(forecast.dt_txt);
        
        if (forecast.dt_txt.includes('15:00:00') && occurance < 4 ) {
            occurance += 1;
            let card = document.createElement('span');
            let temp = document.createElement('p');
            let description = document.createElement('p');
            let icon = document.createElement('img');

            temp.innerHTML = `${Math.round(forecast.main.temp)}&deg;F`;
            let desc = forecast.weather[0].description;
            description.textContent = `${titleCase(desc)}`;
            const iconsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
            icon.setAttribute('src', iconsrc);
            icon.setAttribute('alt', desc);

            card.appendChild(temp);
            card.appendChild(description);
            card.appendChild(icon);
            forecastCard.appendChild(card)
            }
    })

}