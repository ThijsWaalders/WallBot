// main app.js file
// Global variables
let header = "<header><h1>Wall Bot v1.4</h1></header>";
// Select elements
let getBody = document.getElementsByTagName("body")[0];
// document.getElementsByTagName("body")[0].style.overflow = "scroll";
let getTable = document.querySelector(".container__table");
// let getInput = document.querySelector("input");
let getConTable = document.getElementsByClassName("container__table");
let getContainer = document.getElementsByClassName("container");
// Create elements
let container = document.createElement("div");
let conTable = document.createElement("div");
// Create main container and set classname
// Add h1 (header) to that container
// Add container to body
container.innerHTML = header;
getBody.appendChild(container);
container.classList.add("container");
// Create Search/Filter input
let search = document.createElement("input");
// Create search/filter box and add to the container
container.innerHTML = "TradeOgre";
container.appendChild(search);
// Add id search-input
search.id = "search-input";
// Add classlist
search.className = "form-control";
// Add type
search.type = "text";
// Add placeholder
search.placeholder = "Filter coins.."
// Clear search box on load function
function init() {
    // Clear input on load
    getSearchInput.value = "";
  }
  window.onload = init;