const visitDisplay = document.querySelector(".visit");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
let lastVisit = Number(window.localStorage.getItem("lastVisit-ls")) || 0;
const msInDay = 84600000;
const todaysDate = Number(new Date());
let daysSince = (todaysDate-lastVisit)/msInDay;

if (numVisits === 0) {
    visitDisplay.innerHTML = `Welcome! Let us know if you have any questions`;
}  else {
    if (daysSince < 1) {
        visitDisplay.textContent = `Back so soon! Awesome!`;
    } else {
        visitDisplay.textContent = `You last visited ${Math.ceil(daysSince)} days ago.`;
    }
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);
localStorage.setItem("lastVisit-ls", todaysDate);
