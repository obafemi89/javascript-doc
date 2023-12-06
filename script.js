const accesskey = "Udc4hYUcejSa-1Phhal83sozydeOHAYXPfMoyKyiTmc";

const formEl = document.querySelector("form");
const inputE1 = document.getElementById("Search-input");
const searchResults = documents.querySelector(".search-results");
const showMore =document.getElementById("show-more-button");

let inputData ="";
let page =1;

async function searchimages(){
    inputdata = inputE1.value;
    const url =  'https://api.unsplash.com/search/photos?page=${page}&query=$
    (inputData)&client_id=${accesskey}';
   
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1){
        searchResults.innerHtml ="";
    }
    results.map((result) =>{
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("search-result");
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imagelink =document.createElement('a');
        imagelink.href = result.link.innerHtml;
        imagelink.target = "_blank";
        imagelink.textcontent = result.alt_description ;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imagelink);
        searchResults.appendChild(imageWrapper);
    });

    page++;
    if(page > 1){
        showMore.style.display = "block";
    }
}

formEl.addEventlistener("submit", (event) =>{
    event.preventdefault{};
    page = 1;
    searchimages();
});

showMore.addEventListener("click", () => {
    searchimages();
});
   

