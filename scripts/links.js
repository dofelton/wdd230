const baseURL = "https://dofelton.github.io/wdd230/";
const linksURL = "https://dofelton.github.io/wdd230/data/links.json";
const links = document.querySelector('.links')
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.lessons);
    displayLessons(data.lessons);
  }
  
const displayLessons = (lessons) => {
    lessons.forEach((lesson) => {
        links.foreach((link) => {
            let linkurl = link.url;
            let linktittle = link.tittle;
        })
        let links = document.createElement('section');
        let week = document.createElement('p');
        let assignment = document.createElement('a');
        assignment.setAttribute('href', data.url);
        assignment.textContent= data.title;
        let weekline = `Week ${lesson}: `
    })
}

getLinks();

