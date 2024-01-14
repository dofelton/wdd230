const d = new Date();
let year = d.getFullYear();
document.getElementById("currentyear").innerHTML = year;

let lastMod = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = lastMod;