// TradeOgre.js
// Main code for TradeOgre API
// Declare global variables
const ex1Headers = ["Currency-Pair", "Volume", "Last Closed Candle Price", "Ask", "Bid"];
let toMarkets = []; // TO Markets array with objects
const url = 'https://tradeogre.com/api/v1/'; // TradeOgre main api url
// Create elements
let table = document.createElement("table");
let tr = table.insertRow();
let tHead = document.createElement("thead");
let tBody = document.createElement("tbody");
let td =  document.createElement("td");

// Get the reference for the body elements
let getTHead = document.querySelector("thead");
let getSearchInput = document.getElementById("search-input");
//
// Create container and add the table
container.appendChild(table);
// Add correct classname for the table
table.classList.add("container__table");
table.id = "toTable";
// Set classname for tbody
table.firstChild.className = "container__table__body";
// Set classname for thead
tHead.classList.add("container__table__head");



function filterFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search-input");
  filter = input.value.toUpperCase();
  table = document.getElementById("toTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      };
    };
  };
};


//
// Overflow scroll uitwerken??
//
// document.getElementsById("body").style.overflow = "scroll";

// On load functions
window.addEventListener("load", function(){
  let getTable = document.querySelector('.container__table');
  //
  // Keyup event to start search/filter after key is being released
  getSearchInput.onkeyup = function(){
      filterFunction();
      console.log('Toets is losgelaten');
  };
  //
  // BUILD TABLE HEAD
  //
  function buildTableHead(){
      ex1Headers.forEach(headerText => {
          let th = document.createElement('th');
          let textNode = document.createTextNode(headerText);
          th.appendChild(textNode);
          tr.appendChild(th);
          tHead.appendChild(th);
      });
      getTable.appendChild(tHead);
  };
  buildTableHead();

  function buildTableEx1(){
    fetch(url+"markets").then(response => response.json()).then(data => createTable(data)).catch(error=>console.log(error))
      // Delete first row from tbody
      let getTBody = document.querySelector("tbody");
      const createTable = (data) => {
        // Store API response/data in array
        let toMarkets = data;
        //
        // BUILD TABLE BODY
        //
        let perRow = 1; // HOW MANY TD PER TR
        toMarkets.forEach((value, i) => {
          td.innerHTML = Object.keys(toMarkets[i]);
          td = tr.insertCell(); // Deze stond boven td.innerHTML = ...
          // BREAK INTO NEXT ROW
          let next = i + 1;
          if (next%perRow==0 && next!=toMarkets.length) {
            tr = table.insertRow();
          };
        });
    };
  };
  buildTableEx1();
});
//
// Maandag 6-12-2021
//
//
// DELETE EMPTY ROW AFTER OR BEFORE CREATETABLE FUNCTION

// if td.value = "" then 2x {select parent, delete child}
// ########################################################
// function delEmptyRows() {
//   // select/get all td
//   let getAllTd =  document.querySelectorAll('td');
//   if (getAllTd.innerHTML = '') {
//     getAllTd.closest('tr').remove(td);
//     return false;
//   };
// //########################################################
//   // let arr = ['Krunal', 'Ankit', 'Rushabh']
//   let index, value, result;
//   for (i = 0; i < Object.keys(toMarkets).length; ++i) {
//       value = toMarkets[i];
//       if (value.substring(0, 3) === "BTC") {
//         result = value;
//           break;
//       }
//   }
//   if (result) {
//     console.log(result)
//   }
//   else {
//     console.log('Oops!! Not found')
//   }

// }
// delEmptyRows();
//########################################################








// ###################################################################
// ###################################################################


//
// PICK OBJECT, COMPARE NAME FROM 3 OR 4TH LETTER TO FIND DUPLICATES
//
// USE THE ARRAY.filter() like this:
// var array = ["q", "w", "w", "e", "i", "u", "r"],
//     seen = array.filter((s => v => s.has(v) || !s.add(v))(new Set));

// console.log(seen);



// // ###################################################################
// // Show data from toMarkets
// // Access Nested Objects Using Array Reduce
// // Set global vars
// const getNestedObject = (nestedObj, pathArr) => {
//   return pathArr.reduce((obj, key) =>
//       (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
// };
// // pass in your object structure as array elements
// let toBtcArrr = getNestedObject(toMarkets, ['4','BTC-ARRR']);
// console.log("BTC - ARRR Stored: " + toBtcArrr);
// let toBtcArrrAsk = getNestedObject(toMarkets, ['4','BTC-ARRR', 'ask']);
// console.log("BTC - ARRR Ask Price (BTC): " + toBtcArrrAsk);
// // to access nested array, just pass in array index as an element the path array.
// let toBtcArrrBid = getNestedObject(toMarkets, ['4','BTC-ARRR', 'bid']);
// console.log("BTC - ARRR Bid price (BTC): " + toBtcArrrBid);
// // to access nested array, just pass in array index as an element the path array.
// let toBtcArrrVol = getNestedObject(toMarkets, ['4','BTC-ARRR', 'volume']);
// console.log("BTC - ARRR Volume: " + toBtcArrrVol);

// //
// // CLICK ON CELL TO DO SOMETHING
// //
// // cell.onclick = FUNCTION;

// //
// // TO PASS IN A RUNNING NUMBER OR PARAMETER
// //
// // cell.onclick = () => { console.log(i); };