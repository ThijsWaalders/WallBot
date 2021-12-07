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
  // buildTestTable();
      


  fetch(url+"markets").then(response => response.json()).then(data => createTable(data)).catch(error=>console.log(error))

    const createTable = (data) => {
      const tableData = data;
      // const headerData = ["TH A", "TH B", "TH C"];
      const coinsData = Object.keys(tableData[6]);
      const table = document.createElement('table');
      const tr = table.insertRow(-1);
      // console.log(tableData);
                                             
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  // (B) DUMMY ARRAY
  var data = ["doge", "cate", "birb", "doggo", "moon moon", "awkward seal"];

  // (C) CREATE HTML TABLE
  // (C1) HTML TABLE ELEMENT
  var myTable = document.createElement("table"),
      row = myTable.insertRow(), cell;

  // (C2) LOOP THROUGH ARRAY & GENERATE ROWS-CELLS
  var perrow = 1; // 1 Coin CELLS PER ROW
  tableData.forEach((value, i) => {
    // ADD CELL
    cell = row.insertCell();
    cell.innerHTML = Object.keys(tableData[i]);

    // CLICK ON CELL TO DO SOMETHING
    // cell.onclick = FUNCTION;

    // TO PASS IN A RUNNING NUMBER OR PARAMETER
    // cell.onclick = () => { console.log(i); };

    // BREAK INTO NEXT ROW
    var next = i + 1;
    if (next%perrow==0 && next!=tableData.length) { row = myTable.insertRow(); }
  });

  // (D) ATTACH TABLE TO CONTAINER
  getBody.appendChild(myTable);

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
                                               

      // for(let i=0; i<headerData.length; i++){
      //   const th = document.createElement('th');
      //   th.innerHTML = headerData[i];
      //   tr.appendChild(th)
      // };
      

  // // HIERMEE TOVER IK DE NAAM VD COINS
  //     for(let i=0; i<coinsData.length; i++){
  //       const tr = document.createElement('tr');
  //       tr.innerHTML = coinsData[i];
  //       tBody.appendChild(tr);
  // // EIND TOVERKUNSTEN

  //       const obj = coinsData[i];
  //       for(let key in obj) {
  //         const tr = document.createElement('tr');
  //         const td = document.createElement('td');
  //         td.innerHTML = coinsData[i];
  //         tr.appendChild(td);
  //         tBody.appendChild(tr);

  //         // cellBText.innerHTML = getNestedObject(tableData,['4','BTC-ARRR','ask']);

  //     };
  //   };
      
      

      // for(let i=0; i<tableData.length; i++){
      //   const tr = table.insertRow(-1);
      //   const obj = headerData[i];
      //   for(let key in obj) {
      //       const td = document.createElement('td');
      //     td.innerHTML = tableData[i];
      //     tr.appendChild(td);
      //   };
      // };
    // document.body.appendChild(table);
    // };

    // // create backside
    // const back = document.createElement('div');
    // back.classList.add('back');
    // back.style.backgroundImage = 'url(' + img + ')';
    // //  append card to grid, front and back
    // grid.appendChild(card);
    // card.appendChild(front);
    // card.appendChild(back);
  };
});