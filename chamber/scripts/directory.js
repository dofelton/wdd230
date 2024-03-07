const url = 'https://dofelton.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');

const getMemberData = async () => {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data.members);
        displayMembers(data.members);
    }
    
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement("h2");
        let address = document.createElement('h3');
        let phone = document.createElement('h3');
        let picture = document.createElement("img");
        let membership = document.createElement('h3');

        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        picture.setAttribute('src', member.image);
        picture.setAttribute('alt', `Picture of ${member.name}`);
        picture.setAttribute('loading', 'lazy');
        picture.setAttribute('width', '340');
        picture.setAttribute('height', '440');
        membership.textContent = (member.membership)
        
        let a = document.createElement('a');
        let link = document.createTextNode(member.url);
        a.appendChild(link);
        // a.title = member.url;
        a.href = member.url;

        card.appendChild(name);
        card.appendChild(picture);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(a);
        card.appendChild(membership);
        

        cards.appendChild(card);
    })
}

getMemberData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
