let table = document.querySelector(".table");
const rentalUrl = "data/rental.json";
console.log("Begin table script");

const tableData = async () => {
    const response = await fetch(rentalUrl);
    if (response.ok) {
        const data = await response.json();
        displayTable(data);
    }
}

function displayTable(tableInfo) { 
    tableInfo.rentals.forEach((info) => {
        let row = document.createElement('tr');
        let vehicle = document.createElement('td');
        let capacity = document.createElement('td');
        let resHalf = document.createElement('td');
        let resFull = document.createElement('td');
        let wiHalf = document.createElement('td');
        let wiFull = document.createElement('td');

        vehicle.textContent = `${info.name}`;
        capacity.textContent = `${info.capacity}`;
        resHalf.textContent = `${info.resHalf}`;
        resFull.textContent = `${info.resFull}`;
        wiHalf.textContent = `${info.walkHalf}`;
        wiFull.textContent = `${info.walkFull}`;

        row.appendChild(vehicle);
        row.appendChild(capacity);
        row.appendChild(resHalf);
        row.appendChild(resFull);
        row.appendChild(wiHalf);
        row.appendChild(wiFull);
        table.append(row);

    })
}
  
tableData();