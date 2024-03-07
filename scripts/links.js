const baseURL = "https://dofelton.github.io/wdd230/";
const linksURL = "https://dofelton.github.io/wdd230/data/links.json";
const links = document.querySelector('.links')
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.lessons);
    displayLessons(data.lessons);
  }
  
async function displayLessons(lessons){
    lessons.forEach((lesson) => {
        lesson.links.forEach((url) => {
        console.log(lesson);
        let week = document.createElement('section');
        let title = document.createElement('span');

        let a = document.createElement('a');
        let link = document.createTextNode(url.title);
        a.appendChild(link);
        a.title = url.title;
        a.href = url.url;

        title.textContent = `Week ${lesson.lesson}: `;
        
        week.appendChild(title);
        week.appendChild(a);
   
        links.appendChild(week);
    })
    })
}

getLinks();



// links.foreach((link) => {
//     let linkurl = link.url;
//     let linktittle = link.tittle;
// })
// let links = document.createElement('section');
// let week = document.createElement('p');
// let assignment = document.createElement('a');
// assignment.setAttribute('href', data.url);
// assignment.textContent= data.title;
// let weekline = `Week ${lesson}: `