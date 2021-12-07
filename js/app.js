// main app.js file
// Global variables
let header = "<header><h1>Crypto Wall Bot v1</h1></header>";
// Select elements
let getBody = document.getElementsByTagName("body")[0];
let getTable = document.querySelector(".container__table");



let getConTable = document.getElementsByClassName("container__table");
let getContainer = document.getElementsByClassName("container");
// Create elements
let container = document.createElement("div");
let conTable = document.createElement("div");
let cellAText = document.createTextNode("Currency-Pair");
let cellBText = document.createTextNode("Volume");
let cellCText = document.createTextNode("Closed Price Last Candle");
let cellDText = document.createTextNode("Ask");
let cellEText = document.createTextNode("Bid");


// Add API objects to these elements


// Create a Button that adds or removes the class/id to show/hide the selected list


// Create a form and button to add, remove specific Exchanges and coins to the selectedExchange and selectedList variables
// - Form

// Create containers
// Create <header> and <h1>
container.innerHTML = header;
getBody.appendChild(container);
container.classList.add("container");


// Create a container to put the first exchange table in
// getBody.appendChild(container);







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