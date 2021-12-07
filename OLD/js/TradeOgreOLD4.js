// TradeOgre.js
// Main code for TradeOgre API

// Declare global variables

const url = 'https://tradeogre.com/api/v1/'; // TradeOgre main api url

let toMarkets = []; // TO Markets array with objects

// get the reference for the body
// const deck = document.getElementById('game');
// const cards = document.getElementsByClassName('card');
// card.classList.remove('selected');
// card.classList.add('selected');

const getBody = document.getElementsByTagName("body")[0];
const getTable = document.getElementsByTagName("table");
const getTHead = document.getElementsByTagName("thead");
const getTBody = document.getElementsByTagName("tbody");


// create table elements
const newTable = document.createElement("table");
document.getElementById("container__table").appendChild(newTable);
const tHead = document.createElement("thead");
const tBody = document.createElement("tbody");
const td = document.createElement('td'); // Cell
const th = document.createElement("th"); // Cell header <th> actually is a replacement for <td> when you want to mark a cell as a header cell.
const tr = document.createElement("tr"); // Row

cellA = document.createElement("td");
const cellAText = document.createTextNode("Currency-Pair");
const cellBText = document.createTextNode("Volume");
const cellCText = document.createTextNode("Closed Price Last Candle");
const cellDText = document.createTextNode("Ask");
const cellEText = document.createTextNode("Bid");


// // Create Element function
// function createNode(element) {
//   return document.createElement(element);
// }
// // Append child
// function append(parent, el) {
// return parent.appendChild(el);
// }


// Create a new object/array to store the whole market info from TO: let toMarkets = [];

// Show this whole market with on/off (class/id) selection box for coins to add/remove on the selectedList

// Create a new object/array to store only selected coin data in list
    
window.addEventListener("load", function(){

  // TABLE BUILD

  // for each loop? thead row create theaders and cells

  // create td and add cellAText
  td.appendChild(cellAText);
  // create th and add td
  th.appendChild(td);
  //
  tHead.appendChild(th);
  // create td and add cellBText
  td.appendChild(cellBText);
  // create th and add td
  th.appendChild(td);
  // create row and add th to row
  tr.appendChild(th);
  // add row to tHead
  tHead.appendChild(tr);
  // add thead to table


  // td.innerHTML = cellAText;
  // <div>Volume: ${toBtcArrrVol[key]['4','BTC-ARRR','volume']}</div>
  td.appendChild(cellAText);
  th.appendChild(td);
  tr.appendChild(th);

  td.appendChild(cellBText);
  th.appendChild(td);
  tr.appendChild(th);

  // put the <thead> in the <table>
  newTable.appendChild(tHead);
  // put the <tbody> in the <table>
  newTable.appendChild(tBody);
  // appends <table> into <body>
  getBody.appendChild(newTable);


  newTable.appendChild(tr);
  th.appendChild(cellAText);


  // (C4) ATTACH ROW & CELLS
  newTable.appendChild(tr);
  th.appendChild(cellAText);
  th.appendChild(cellBText);

  tr.appendChild(th);
  // tr.appendChild(cellD);
  // tr.appendChild(cellE);
  console.log("---Main Table Created---");


  // // creating all cells
  // for (var i = 0; i < 2; i++) {
  //   // creates a table row
  //   var row = document.createElement("tr");

  //   for (var j = 0; j < 2; j++) {
  //     // Create a <td> element and a text node, make the text
  //     // node the contents of the <td>, and put the <td> at
  //     // the end of the table row
  //     var cell = document.createElement("td");
  //     var cellText = document.createTextNode("cell in row "+i+", column "+j);
  //     cell.appendChild(cellText);
  //     row.appendChild(cell);
  //   }

  //   // add the row to the end of the table body
  //   tblBody.appendChild(row);
  // }
  
  // // put the <tbody> in the <table>
  // tbl.appendChild(tblBody);
  // // appends <table> into <body>
  // body.appendChild(tbl);
  // // sets the border attribute of tbl to 2;
  // tbl.setAttribute("border", "2");

  // End table build

       

  // API Fetch Get Orderbook TO
  fetch(url+'markets')
  // fetch(url+'orders/btc-arrr')
  .then(res => res.json())
  // .then(data => console.log(data))
  .then(function(data) {
    // create / store data in variable toMarkets
    toMarkets = data;
    // Show data from toMarkets
    // Access Nested Objects Using Array Reduce
    // Set global vars
    const getNestedObject = (nestedObj, pathArr) => {
      return pathArr.reduce((obj, key) =>
          (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
    }

    // pass in your object structure as array elements
    let toBtcArrr = getNestedObject(toMarkets, ['4','BTC-ARRR']);
    console.log("BTC - ARRR Stored: " + toBtcArrr);
    let toBtcArrrAsk = getNestedObject(toMarkets, ['4','BTC-ARRR', 'ask']);
    console.log("BTC - ARRR Ask Price (BTC): " + toBtcArrrAsk);

    // select doc id and add toBtcArrrAsk to list

    // to access nested array, just pass in array index as an element the path array.
    let toBtcArrrBid = getNestedObject(toMarkets, ['4','BTC-ARRR', 'bid']);
    console.log("BTC - ARRR Bid price (BTC): " + toBtcArrrBid);
    // to access nested array, just pass in array index as an element the path array.
    let toBtcArrrVol = getNestedObject(toMarkets, ['4','BTC-ARRR', 'volume']);
    console.log("BTC - ARRR Volume: " + toBtcArrrVol);

    // Create Front End to show orderbook
    console.log(toMarkets)
    console.log("Passed - API Fetch Get TO Markets stored in toMarkets");
       
    // (C) GENERATE TABLE
    // (C1) CREATE EMPTY TABLE
    var table = document.createElement("table");
    document.getElementById("container__table").appendChild(table);

    for (let key in toMarkets) {
      // (C2) ROWS & CELLS
      row = document.createElement("tr");
       
      // toMarkets.forEach(
      //    build list
      //  )

      // 1e row moet "Cur-Pair", "Price Ask", "Price Bid", "Volume", "Last Closed Price", etc weergeven.
      // Als het kan, itemlistname als html string weergeven oid
    
      const td = document.createElement('td');
    
      cellA = document.createElement("td");
      cellB = document.createElement("td");
      cellC = document.createElement("td");
      cellD = document.createElement("td");
      cellE = document.createElement("td");


      // (C3) KEY & VALUE
      cellA.innerHTML = key;

      // For loop the toMarkets array
      // let text = "";
      for (let i = 0; i < toMarkets.length; i++) {
        // text += toMarkets[i];
        // create a row for each object (coin pair) in the array, elke coin een nieuwe row
        const tr = table.insertRow(-1);
        const obj = toMarkets[i];
        for(let key in obj) {
          const td = document.createElement('td');

          const headerData = Object.keys(toMarkets[0]);
          const tr = table.insertRow(-1);

          td.innerHTML = key;
          tr.appendChild(td);
          // console.log(toMarkets[i]);

          cellC.innerHTML = "Ask Price:";
          cellD.innerHTML = getNestedObject(toMarkets,['4','BTC-ARRR','ask']);
        }
        
        // td en tr + appendChild en append zijn het zelfde?

         
          // COLORS FIELD
          if (key==4) {
          }
          // PET FIELD
          else if (key=="") {
          }
          // OTHER FIELDS
          else {
            cellE.innerHTML = "Cell E";
          }
          // (C4) ATTACH ROW & CELLS
          table.appendChild(row);
          row.appendChild(cellA);
          row.appendChild(cellB);
          row.appendChild(cellC);
          row.appendChild(cellD);
          row.appendChild(cellE);
          console.log("---TO Market Table Created---");
      }
    }
  });
});


