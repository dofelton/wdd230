const banner = document.querySelector('.banner');

const displayBanner = () => {
    let welcome = document.createElement('h3');
    let details = document.createElement('h2');

    welcome.innerHTML = `ALL WELCOME: Come out to our weekly Meet and Greet!`;
    details.innerHTML = `Wednesday at 7:00`;

    banner.appendChild(welcome);
    banner.append(details);
}

const d = new Date();
let day = d.getDay();
if (day == 1 || day == 2 || day == 3)
{
    displayBanner();
}
