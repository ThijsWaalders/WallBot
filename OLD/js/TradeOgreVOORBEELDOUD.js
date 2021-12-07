// TradeOgre.js
// Main code for TradeOgre API

// Declare global variables

const ex1Headers = ["Currency-Pair", "Volume", "Last Closed Candle Price", "Ask", "Bid"];

const url = 'https://tradeogre.com/api/v1/'; // TradeOgre main api url
let toMarkets = []; // TO Markets array with objects

// Get the reference for the body
// ## const deck = document.getElementById('game');
// ## const cards = document.getElementsByClassName('card');
// ## card.classList.remove('selected');
// ## card.classList.add('selected');

// const getConTableEx1 = document.getElementsByClassName("container__table__ex1");
let table = document.createElement("table"),
    tr = table.insertRow(-1), cell;
// tBody.classList.add("container__table__body");
let tHead = document.createElement("thead");
let tBody = document.createElement("tbody");
let th =  document.createElement("th");
let td =  document.createElement("td");

window.addEventListener("load", function(){
  // (B) PARSE THE JSON STRING INTO OBJECT FIRST
  var data = '{"Name":"John Doe","Email":"john@doe.com","Gender":"male"}';
  data = JSON.parse(data);
  // console.table(data);
 
  // (C) GENERATE TABLE
  // (C1) CREATE EMPTY TABLE
  var table = document.createElement("table"), row, cellA, cellB;
  document.getElementById("demoA").appendChild(table);
  for (let key in data) {
    // (C2) ROWS & CELLS
    row = document.createElement("tr");
    cellA = document.createElement("td");
    cellB = document.createElement("td");
 
    // (C3) KEY & VALUE
    cellA.innerHTML = key;
    cellB.innerHTML = data[key];
 
    // (C4) ATTACH ROW & CELLS
    table.appendChild(row);
    row.appendChild(cellA);
    row.appendChild(cellB);
  }
});











// let tr = table.insertRow(-1); // onder table stond row = table.insertRow(), cell;
// 
// row () vs tr(-1) uitzoeken

// Create a new object/array to store the whole market info from TO: let toMarkets = [];
// Show this whole market with on/off (class/id) selection box for coins to add/remove on the selectedList
// Create a new object/array to store only selected coin data in list

// // TESTfunction
// console.log(header);
// function botInit(){
//   grid.innerHTML = "";
//   // loop through tHeaders and append to ex1Table
// };
//  botInit();





// window.addEventListener("load", function(){
  // function buildEx1(){
  //   fetch(url+"markets").then(response => response.json()).then(data => createTable(data)).catch(error=>console.log(error))
  //     const createTable = (data) => {
  //       // Store API response/data in array
  //       let toMarkets = data;
  //       // Create container and add the table
  //       container.appendChild(table);
  //       // Add correct classname for the table
  //       table.classList.add("container__table");
        
        
        
        
        
  //       // BUILD TABLE HEAD
        
  //       // (C) GENERATE TABLE
  //       // (C1) CREATE EMPTY

  //       for (let key in ex1Headers) {
  //         // (C2) ROWS & CELLS
  //         // row = document.createElement("tr");
  //         cellA = document.createElement("th");
  //         cellB = document.createElement("th");
  //         cellC = document.createElement("th");
  //         cellD = document.createElement("th");
  //         cellE = document.createElement("th");
  //         // (C3) KEY & VALUE
  //         cellA.innerHTML = ex1Headers[0];
  //         cellB.innerHTML = ex1Headers[1];
  //         cellC.innerHTML = ex1Headers[2];
  //         cellD.innerHTML = ex1Headers[3];
  //         cellE.innerHTML = ex1Headers[4];
  //         // (C4) ATTACH ROW & CELLS
  //         // add cellA... to a row
  //         tr.appendChild(cellA);
  //         tr.appendChild(cellB);
  //         tr.appendChild(cellC);
  //         tr.appendChild(cellD);
  //         tr.appendChild(cellE);
  //         // add row to thead
  //         table.firstChild.className = "container__table__body";
  //         tHead.appendChild(tr);
  //         // set correct classname for thead
  //         tHead.classList.add("container__table__head");

  //         // add thead to the table
  //         table.appendChild(tHead);

  //       };




  //       // let tableBody = document.getElementsByClassName('container__table__body');


  //       // BUILD TABLE BODY
  //       // (C2) LOOP THROUGH ARRAY & GENERATE ROWS-CELLS
  //       let perrow = 3; // HOW MANY TD PER TR
  //       toMarkets.forEach((value, i) => {
  //         td.innerHTML = Object.keys(toMarkets[i]);
  //         td = tr.insertCell(); // Deze stond boven td.innerHTML = ...
  //         ////////////////////////////////
  //         // CLICK ON CELL TO DO SOMETHING
  //         // cell.onclick = FUNCTION;
  //         // TO PASS IN A RUNNING NUMBER OR PARAMETER
  //         // cell.onclick = () => { console.log(i); };
  //         ////////////////////////////////
  //         // BREAK INTO NEXT ROW
  //         let next = i + 1;
  //         if (next%perrow==0 && next!=toMarkets.length) {
  //           tr = table.insertRow();
  //           // getTBody.classList.add("brrrrr");
  //         };
  //       });
  //   //  HIER
  //   };
  // };
  // buildEx1();



// });