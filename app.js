

const API_KEY = "&apikey=c09cccb2";
const url="https://omdbapi.com/?s=";

const buttonEl=document.querySelector('#search');
const inputEl=document.querySelector('#userInput');
const searchEl=document.querySelector('#movies');

function movieSection(movies) {
    return movies.map((movie) => {
        return `   
        <img src=${movie.Poster}/> 
        <h2> Nimi: ${movie.Title} Vuosi: ${movie.Year}</h2>
        `;
    })
}

function createMovie(movies){
    const movieElement=document.createElement("div");

    movieElement.setAttribute('class', 'movie');


    img_list = movieSection(movies);

    const movieTemplate = 
    `<section class="section">
    ${img_list.join("")}  
    ${movieSection(movies)}
    </section>
    <div class="content">
    <p id="content-close>X</p>
    </div>
    `;


 movieElement.innerHTML = movieTemplate;
 return movieElement;

}


function SearchMovies(data) {
const movies = data.Search; 
const movieBlock = createMovie(movies);
searchEl.appendChild(movieBlock);
console.log("Data:", data);
}


buttonEl.onclick=function(event) {
   
    event.preventDefault();
    
    const value = inputEl.value;

   if (inputEl.value == "") {
    alert("Et voi etsiä elokuvaa jolla ei ole nimeä.");
   }
    
    const newUrl = url + value + API_KEY;

   
    fetch(newUrl)
    .then((res) => res.json()) 
    .then((data) =>{
        const movies = data.Search; 
        const movieBlock = createMovie(movies);
        searchEl.appendChild(movieBlock);
        console.log("Data:", data);
        
    })
    .catch((error) =>{ 
        console.log("Error:", error);
    }); 

    inputEl.value = ""; 
}