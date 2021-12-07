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
let table = document.createElement("table"), tr = table.insertRow(-1), cell;
// tBody.classList.add("container__table__body");
let tHead = document.createElement("thead");
let tBody = document.createElement("tbody");
let th =  document.createElement("th");
let td =  document.createElement("td");
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

// item - create for each item a separated th and add all of them to the first row
  // th
    // tr
      // thead - add tr to thead and thead to table
        // table - add table to container
          // container__table

window.addEventListener("load", function(){
  function buildEx1(){
    fetch(url+"markets").then(response => response.json()).then(data => createTable(data)).catch(error=>console.log(error))
      const createTable = (data) => {
        // Store API response/data in array
        let toMarkets = data;
        // Create container and add the table
        container.appendChild(table);
        // Add correct classname for the table
        table.classList.add("container__table");
        
        // Ditch thead and tbody, only use tr with th's in first row on table, rest of rows may contain array/objects
        //
        // TEST BUILDING
        //
        let btnGet = document.querySelector('button');
        let myTable = document.querySelector('.container__table');
        let employees = [
            { name: 'James', age: 21, country: 'United States' },
            { name: 'Rony', age: 31, country: 'United Kingdom' },
            { name: 'Peter', age: 58, country: 'Canada' },
            { name: 'Marks', age: 20, country: 'Spain' }
        ];
        // let headers = ['Name', 'Age', 'Country'];
        // btnGet.addEventListener('click', () => {
        function buildTable(){
            // let table = document.createElement('table');
            let headerRow = document.createElement('tr');
            ex1Headers.forEach(headerText => {
                let th = document.createElement('th');
                let textNode = document.createTextNode(headerText);
                th.appendChild(textNode);
                tr.appendChild(th);
                tHead.appendChild(th);
            });
            myTable.appendChild(tHead);
            // myTable.appendChild(table);
        };
        buildTable();
        // });
        //
        // END TEST BUILDING
        //
        
        // (C) GENERATE TABLE
        // (C1) CREATE EMPTY

        // BUILD TABLE HEAD
        // for (let key in ex1Headers) {
        //   // (C2) ROWS & CELLS
        //   // row = document.createElement("tr");
        //   cellA = document.createElement("th");
        //   cellB = document.createElement("th");
        //   cellC = document.createElement("th");
        //   cellD = document.createElement("th");
        //   cellE = document.createElement("th");
        //   // (C3) KEY & VALUE
        //   cellA.innerHTML = ex1Headers[0];
        //   cellB.innerHTML = ex1Headers[1];
        //   cellC.innerHTML = ex1Headers[2];
        //   cellD.innerHTML = ex1Headers[3];
        //   cellE.innerHTML = ex1Headers[4];



        //   // let perHeaderRow = 1; // HOW MANY TH PER TR
        //   // ex1Headers.forEach((value, i) => {
        //   //   th.innerHTML = ex1Headers[i];
        //   //   th = tr.insertCell(); // Deze stond boven th.innerHTML = ...
        //   //   // BREAK INTO NEXT ROW
        //   //   let next = i + 1;
        //   //   if (next%perHeaderRow==0 && next!=ex1Headers.length) {
        //   //     tr = table.insertRow();
        //   //   };
        //   // });



        //   // (C4) ATTACH ROW & CELLS
        //   // add cellA... to a row
        //   tr.appendChild(cellA);
        //   tr.appendChild(cellB);
        //   tr.appendChild(cellC);
        //   tr.appendChild(cellD);
        //   tr.appendChild(cellE);
        //   // add row to thead
          table.firstChild.className = "container__table__body";
          tBody.appendChild(tr);
          // set correct classname for thead
          tHead.classList.add("container__table__head");

          // add thead to the table
          table.appendChild(tHead);

        // };
        //
        // END BUILDING TABLE HEAD
        //



        // let tableBody = document.getElementsByClassName('container__table__body');


        // BUILD TABLE BODY
        // // (C2) LOOP THROUGH ARRAY & GENERATE ROWS-CELLS
        // let perthrow = 6; // 1 Coin CELLS PER ROW
        // ex1Headers.forEach((value, i) => {
        //   cell = row.insertCell();
        //   cell.innerHTML = Object.keys(ex1Headers[i]);
        //   // BREAK INTO NEXT ROW
        //   let next = i + 1;
        //   if (next%perthrow==0 && next!=ex1Headers.length) {
        //     row = tHead.insertRow();
        //   };
        // });

          //
          // BUILD TABLE BODY
          //
          // (C2) LOOP THROUGH ARRAY & GENERATE ROWS-CELLS











          let perrow = 1; // HOW MANY TD PER TR
          toMarkets.forEach((value, i) => {
            td.innerHTML = Object.keys(toMarkets[i]);
            td = tr.insertCell(); // Deze stond boven td.innerHTML = ...
            ////////////////////////////////
            // CLICK ON CELL TO DO SOMETHING
            // cell.onclick = FUNCTION;
            // TO PASS IN A RUNNING NUMBER OR PARAMETER
            // cell.onclick = () => { console.log(i); };
            ////////////////////////////////
            // BREAK INTO NEXT ROW
            let next = i + 1;
            if (next%perrow==0 && next!=toMarkets.length) {
              tr = table.insertRow();
              // getTBody.classList.add("brrrrr");
            };
          });
    //  HIER
    };
  };
  buildEx1();
});