const banner = document.querySelector('.banner');

const displayBanner = () => {
let welcome = document.createElement('h3');
let details = document.createElement('p');

welcome.textcontent = `ALL WELCOME: Come out to our weekly Meet and Greet!`;
details.textcontent = `Wednesday at 7:00`;

banner.append(welcome);
banner.append(details);
console.log(welcome);
console.log(details);
}

const d = new Date();
let day = d.getDay();

if (day == 1 || day == 2 || day == 3)
{
    displayBanner();
}
