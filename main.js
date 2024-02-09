

console.log("hello");

const API_key="w0bhne-hZA5qwFNpG4kZmzpO_OzCqJpxElumjNIzfqs";


const formEl=document.querySelector("form");
const inputEl=document.getElementById("search-button");
const searchResults=document.querySelector(".search-results");
const showMore=document.getElementById("show-more-button");
const searchInput = document.getElementById("search-input");


let inputdata="";
let page=1;

async function searchImage(){
  inputdata=searchInput.value;
  const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${API_key}`;

  const response= await fetch(url)
  const data= await response.json()
  const results=data.results;

  if(page==1){
    searchResults.innerHTML="";
  }
  results.map((result) => {
    const imageWrapper= document.createElement("div");
    imageWrapper.classList.add("search-result");
    const image=document.createElement("img");
    image.src=result.urls.small;
    image.alt=result.alt_description;
    
    const imageLink=document.createElement("a");
    imageLink.href=result.links.html;
    imageLink.target="-blank";
    imageLink.textContent=result.alt_description;

    imageWrapper.appendChild(image)
    imageWrapper.appendChild(imageLink)
    searchResults.appendChild(imageWrapper)
  });
  page++;
  if(page > 1){
    showMore.style.display="block"
  }
}
try{
formEl.addEventListener("submit" ,(event) => {
  event.preventDefault()
  page = 1;
  searchImage()
})}
catch(error){
  console.error(error);
}

showMore.addEventListener('click' ,() => {
 
  searchImage()
})