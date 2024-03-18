const weatherCard = document.querySelector('.weather');
const url = "https://api.openweathermap.org/data/2.5/forecast?lat=32.9029&lon=-96.5639&appid=34fac9256086cfc3e37efb11d46b6199&units=imperial"

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
    object[] forecast = new object[3];


}