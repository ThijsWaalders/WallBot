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
const getBody = document.getElementsByTagName('body')[0];
const getTable = document.getElementsByTagName('table');
const getTHead = document.getElementsByTagName('thead');
const getTBody = document.getElementsByTagName('tbody');
const getConTableEx1 = document.getElementsByClassName("container__table__ex1");
const getConTable = document.getElementsByClassName("container__table");
const getContainer = document.getElementsByClassName("container");

const header = "<header><h1>Crypto Wall Bot v1</h1></header>";

// Create elements
const container = document.createElement("div");
const conTable = document.createElement("div");
// cellA = document.createElement("td");
const cellAText = document.createTextNode("Currency-Pair");
const cellBText = document.createTextNode("Volume");
const cellCText = document.createTextNode("Closed Price Last Candle");
const cellDText = document.createTextNode("Ask");
const cellEText = document.createTextNode("Bid");


// Create a new object/array to store the whole market info from TO: let toMarkets = [];
// Show this whole market with on/off (class/id) selection box for coins to add/remove on the selectedList
// Create a new object/array to store only selected coin data in list

function botInit(){
  grid.innerHTML = "";
  // loop through tHeaders and append to ex1Table
};
//  botInit();

// declare grid variable
// let grid = "";
// let ex1Table = "";
const table = document.createElement('table');
const tHead = document.createElement('thead');
const tBody = document.createElement('tbody');
const th =  document.createElement('th');
const td =  document.createElement('td');
const tr = table.insertRow(-1);




window.addEventListener("load", function(){
  // Create containers
  getBody.innerHTML = header;
  getBody.appendChild(container);
  container.classList.add("container");
  // conTable.innerHTML = "";
  // getConTable.appendChild(conTable);
  // getConTable.classList.add("container__table");

  // function buildEx1(){
  //   tHead.appendChild(th)
  //   // const table = document.createElement("table");
  //   th.appendChild(cellAText);
  //   // tr.appendChild(th);
  //   th.appendChild(cellBText);
  //   // tr.appendChild(th);
  //   // tHead.appendChild(tr)
  //   // getBody.appendChild(table);
  //   table.appendChild(tHead);
  //   table.appendChild(tBody);
  //   // table.appendChild(tr);
  //   getBody.appendChild(table);
  //   table.classList.add("container__ex1Table");
  //   console.log("---Main Table Created---");
  //   // add row to table
  //   // table.appendChild(tr);
  // };
  // buildEx1();

  function buildEx1(){
    fetch(url+"markets").then(response => response.json()).then(data => createTable(data)).catch(error=>console.log(error))

      const createTable = (data) => {
        let tableData = data;
        // const headerData = ["TH A", "TH B", "TH C"];
        let coinsData = Object.keys(tableData[6]);
        // const table = document.createElement('table'),
        
        const tr = table.insertRow(-1);
        // console.log(tableData);
                                              
    // (C) CREATE HTML TABLE
    let myTable = document.createElement("table"),
        row = myTable.insertRow(), cell;
    // (C2) LOOP THROUGH ARRAY & GENERATE ROWS-CELLS
    let perrow = 1; // 1 Coin CELLS PER ROW
    tableData.forEach((value, i) => {
      // ADD CELL
      cell = row.insertCell();
      cell.innerHTML = Object.keys(tableData[i]);

      // CLICK ON CELL TO DO SOMETHING
      // cell.onclick = FUNCTION;
      // TO PASS IN A RUNNING NUMBER OR PARAMETER
      // cell.onclick = () => { console.log(i); };

      // BREAK INTO NEXT ROW
      let next = i + 1;
      if (next%perrow==0 && next!=tableData.length) { row = myTable.insertRow(); }
    });

    // (D) ATTACH TABLE TO CONTAINER AND SET CORRECT CLASSNAME
    // container.appendChild(conTable);
    // conTable.classList.add("container__table");
    // conTable.appendChild(myTable);
    // myTable.classList.add("container__table__ex1");

    //  HIER
    };
    // OF HIER    THEAD en TH maken
  };
  buildEx1();

    // // create backside
    // const back = document.createElement('div');
    // back.classList.add('back');
    // back.style.backgroundImage = 'url(' + img + ')';
    // //  append card to grid, front and back
    // grid.appendChild(card);
    // card.appendChild(front);
    // card.appendChild(back);
});