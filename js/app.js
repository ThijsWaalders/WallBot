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
container.innerHTML = "TradeOgre Market Overview ";
container.appendChild(search);
// add id search-input
search.id = "search-input";
// add classlist
search.className = "form-control";
// add type
search.type = "text";
// add placeholder
search.placeholder = "Filter coins.."

/**
 * @description Clear search box on load function
 */
function init() {
    // Clear input on load
    getSearchInput.value = "";
  }
  window.onload = init;



// Refresh data table









  //
// OLD STUFF that works
//
// // Add addEventListener to load json toMarkets
// window.addEventListener("load", function(){
//     // (B) PARSE THE JSON STRING INTO OBJECT FIRST
//     // var toMarkets = '{"Name":"John Doe","Email":"john@doe.com","Gender":"male"}';
//     var harrie = '{"Coin":"Bitcoin","Price":"6000000","YES":"GELUKT!"}';
//     harrie = JSON.parse(harrie);
//     // console.table(harrie);

//     // (C) GENERATE TABLE
//     // (C1) CREATE EMPTY TABLE
//     var table = document.createElement("table"), row, cellA, cellB;
//     document.getElementById("toWatcher").appendChild(table);
//     for (let key in harrie) {
//       // (C2) ROWS & CELLS
//       row = document.createElement("tr");
//       cellA = document.createElement("td");
//       cellB = document.createElement("td");

//       // (C3) KEY & VALUE
//       cellA.innerHTML = key;
//       cellB.innerHTML = harrie[key];

//       // (C4) ATTACH ROW & CELLS
//       table.appendChild(row);
//       row.appendChild(cellA);
//       row.appendChild(cellB);
//     }
//   });