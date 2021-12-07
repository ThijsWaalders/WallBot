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
const ex1Table = document.getElementsByClassName("container__ex1table")
// cellA = document.createElement("td");
const cellAText = document.createTextNode("Currency-Pair");
const cellBText = document.createTextNode("Volume");
const cellCText = document.createTextNode("Closed Price Last Candle");
const cellDText = document.createTextNode("Ask");
const cellEText = document.createTextNode("Bid");

// function buildEx1(){
//     const table = document.createElement("table");
//     const tHead = document.createElement("thead");
//     const th =  document.createElement('th');
//     const tr = table.insertRow(-1);
//     th.appendChild(cellAText);
//     tr.appendChild(th);
//     th.appendChild(cellBText);
//     tr.appendChild(th);
//     tHead.appendChild(tr)
//     // getBody.appendChild(table);
//     table.appendChild(tHead);
//     table.appendChild(tBody);
//     table.appendChild(tr);
//     getBody.appendChild(table);
//     table.classList.add("container__ex1Table");
//     console.log("---Main Table Created---");
//     // add row to table
//     // table.appendChild(tr);
// };
// buildEx1();







// Create a new object/array to store the whole market info from TO: let toMarkets = [];

// Show this whole market with on/off (class/id) selection box for coins to add/remove on the selectedList

// Create a new object/array to store only selected coin data in list
    
function botInit(){
  grid.innerHTML = "";
  // loop through tHeaders and append to ex1Table
};
   


// declare grid variable
// let grid = "";
// let ex1Table = "";
const table = document.createElement("table");
const tHead = document.createElement("thead");
const tBody = document.createElement("tbody");
const th =  document.createElement('th');
const td =  document.createElement('td');
const tr = table.insertRow(-1);

window.addEventListener("load", function(){
  function buildEx1(){
    tHead.appendChild(th)
    // const table = document.createElement("table");
    th.appendChild(cellAText);
    // tr.appendChild(th);
    th.appendChild(cellBText);
    // tr.appendChild(th);
    // tHead.appendChild(tr)
    // getBody.appendChild(table);
    table.appendChild(tHead);
    table.appendChild(tBody);
    // table.appendChild(tr);
    getBody.appendChild(table);
    table.classList.add("container__ex1Table");
    console.log("---Main Table Created---");
    // add row to table
    // table.appendChild(tr);
  };
  buildEx1();

  function buildTestTable(){
    // Table build
    // get the reference for the body
    // const body = document.getElementsByTagName("body")[0];
    // creates a <table> element and a <tbody> element
    // var tbl = document.createElement("table");
    // var tBody = document.createElement("tbody");
    // creating all cells
    for (var i = 0; i < 2; i++) {
      // creates a table row
      // var row = document.createElement("tr");
      for (var j = 0; j < 2; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        // var cell = document.createElement("td");
        const cellAText = document.createTextNode("cell in row "+i+", column "+j);
        td.appendChild(cellAText);
        tr.appendChild(td);
      }
      // add the row to the end of the table body
      tBody.appendChild(tr);
    }
    // put the <tbody> in the <table>
    table.appendChild(tBody);
    // appends <table> into <body>
    getBody.appendChild(table);
    // sets the border attribute of tbl to 2;
    table.setAttribute("border", "2");

    // End table build
  }
  buildTestTable();


  // TABLE BUILD

  // for each loop? thead row create theaders and cells

  // // create td and add cellAText
  // td.appendChild(cellAText);
  // // create th and add td
  // th.appendChild(td);
  // //
  // tHead.appendChild(th);
  // // create td and add cellBText
  // td.appendChild(cellBText);
  // // create th and add td
  // th.appendChild(td);
  // // create row and add th to row
  // tr.appendChild(th);
  // // add row to tHead
  // tHead.appendChild(tr);
  // // add thead to table


  // // td.innerHTML = cellAText;
  // // <div>Volume: ${toBtcArrrVol[key]['4','BTC-ARRR','volume']}</div>
  // td.appendChild(cellAText);
  // th.appendChild(td);
  // tr.appendChild(th);

  // td.appendChild(cellBText);
  // th.appendChild(td);
  // tr.appendChild(th);

  // // put the <thead> in the <table>
  // table.appendChild(tHead);
  // // put the <tbody> in the <table>
  // table.appendChild(tBody);
  // // appends <table> into <body>
  // getBody.appendChild(table);


  // table.appendChild(tr);
  // th.appendChild(cellAText);


  // // (C4) ATTACH ROW & CELLS
  // table.appendChild(tr);
  // th.appendChild(cellAText);
  // th.appendChild(cellBText);

  // tr.appendChild(th);
  // // tr.appendChild(cellD);
  // // tr.appendChild(cellE);
  // console.log("---Main Table Created---");


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


