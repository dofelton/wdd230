const highlight1 = document.querySelector(".highlight1");
const highlight2 = document.querySelector(".highlight2");
const source = 'data/members.json';
let data = [];

const getMemberData = async () => {
    const response = await fetch(source);
    if (response.ok) {
        data = await response.json();
        console.log(data.members);
        console.log(data.members.url);
    }
    
}
getMemberData();
function displaySpotlight(members, card) {
    randNum = random.next((data.members.size)-1);
    console.log(randNum);

    members.forEach((member) => {
        
        let name = document.createElement('h2');
        name.textContent = `${members.name}`;
        card.appendChild(name);

        let a = document.createElement('a');
        // let link = document.createTextNode(data.members.url);
        a.appendChild(link);
        a.href = data.members.url;
        card.appendChild(a);
})
}

displaySpotlight(data, highlight1);
displaySpotlight(data, highlight2);
