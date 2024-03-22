const highlight1 = document.querySelector(".highlight1");
const highlight2 = document.querySelector(".highlight2");
const source = 'data/members.json';
let data = [];

const getMemberData = async () => {
    const response = await fetch(source);
    if (response.ok) {
        data = await response.json();
        console.log(data.members);
        displaySpotlight(data.members);
    }
    
}

getMemberData();

function displaySpotlight(array) {    
    console.log(array.length);
    let spot1 = (data.members[(Math.floor(Math.random()  * array.length))]);
    console.log(spot1);

    let name = document.createElement('h2');
    name.textContent = `${spot1.name}`;
    highlight1.appendChild(name);
    let pic1 = document.createElement('img');
    pic1.setAttribute('src', spot1.image);
    pic1.setAttribute('alt', `Picture of ${spot1.name}`);
    pic1.setAttribute('loading', 'lazy');
    pic1.setAttribute('width', '175');
    pic1.setAttribute('height', '150');
    highlight1.appendChild(pic1);
    let a = document.createElement('a');
    let link = document.createTextNode(spot1.url);
    a.appendChild(link);
    a.href = spot1.url;
    highlight1.appendChild(a);

    let spot2 = (data.members[(Math.floor(Math.random()  * array.length))]);
    console.log(spot2);

    let name2 = document.createElement('h2');
    name2.textContent = `${spot2.name}`;
    highlight2.appendChild(name2);
    let pic2 = document.createElement('img');
    pic2.setAttribute('src', spot2.image);
    pic2.setAttribute('alt', `Picture of ${spot2.name}`);
    pic2.setAttribute('loading', 'lazy');
    pic2.setAttribute('width', '175');
    pic2.setAttribute('height', '150');
    highlight2.appendChild(pic2);
    let a2 = document.createElement('a');
    let link2 = document.createTextNode(spot2.url);
    a2.appendChild(link2);
    a2.href = spot2.url;
    highlight2.appendChild(a2);
}

// displaySpotlight(data, highlight1);
// displaySpotlight(data, highlight2);

// 


    //