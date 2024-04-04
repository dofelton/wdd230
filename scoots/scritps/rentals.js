// build a card that will slideshow the various rental options
// show this front and center of the homepage
const url = 'scritps/rental.json';
let cards = document.querySelector(".rentals");

// build card to show name, picture and brief description of each type
const rentalData = async () => {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        setInterval(displayRentals(data.rentals), 4000);
    }
}

const displayRentals = (rentals) => {
    rentals.forEach((rental) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let picture = document.createElement('img');
        let description = document.createElement('p');
        
        name.textContent = `${rental.name}`;
        picture.setAttribute('src', rental.image);
        picture.setAttribute('alt', `Picture of ${rental.name}`);
        description.textContent = `${rental.description}`;

        card.appendChild(name);
        card.appendChild(picture);
        card.appendChild(description);

        cards.appendChild(card);
    })
}
rentalData();
// animate into a slideshow

// const displayRentals = 
// setInterval(function(rentals) {
//     rentals.forEach((rental) => {
//         let card = document.createElement('section');
//         let name = document.createElement('h2');
//         let picture = document.createElement('img');
//         let description = document.createElement('p');
        
//         name.textContent = `${rental.name}`;
//         picture.setAttribute('src', rental.image);
//         picture.setAttribute('alt', `Picture of ${rental.name}`);
//         description.textContent = `${rental.description}`;

//         card.appendChild(name);
//         card.appendChild(picture);
//         card.appendChild(description);

//         cards.appendChild(card);
//     })
// }, 4000);

// const rentalData = async () => {
//     const response = await fetch(url);
//     if (response.ok) {
//         const data = await response.json();
//         console.log(data);
//         displayRentals(data.rentals);
//     }
// }