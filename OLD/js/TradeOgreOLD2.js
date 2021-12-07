// TradeOgre.js
// Main code for TradeOgre API
// Declare global variables

const table = document.getElementById('container__table');
const url = 'https://tradeogre.com/api/v1/markets';
let toMarkets = [];

// Create Element function
function createNode(element) {
  return document.createElement(element);
}
// Append child
function append(parent, el) {
return parent.appendChild(el);
}

// Create a new object/array to store the whole market info from TO: let toMarkets = [];

// Show this whole market with on/off (class/id) selection box for coins to add/remove on the selectedList

// Create a new object/array to store only selected coin data in list
    



    

window.addEventListener("load", function(){
  // (B) PARSE THE JSON STRING INTO OBJECT FIRST
  // var toMarkets = '{"Coooin":"Hejoooo","Email":"john@doe.com","Gender":"male","Colors":["red","green","blue"],"Pet":{"Name":"Roger Doe","Species":"Canis lupus familiaris"}}';
  // toMarkets = JSON.parse(toMarkets);
  // console.table(toMarkets);


  // fetch(url).then(response => response.json()).then(data => createTable(data)).catch(error=>console.log(error))

  // const createTable = (data) => {
  //   const tableData = data;
  //   const headerData = Object.keys(tableData[0]);
  //   const table = document.createElement('table');
  //   const tr = table.insertRow(-1);
  //   for(let i=0; i<headerData.length; i++){
  //     const th = document.createElement('th');
  //     th.innerHTML = headerData[i];
  //     tr.appendChild(th)
  //   }
  //   for(let i=0; i<tableData.length; i++){
  //     const tr = table.insertRow(-1);
  //         const obj = tableData[i];
  //     for(let key in obj) {
  //         const td = document.createElement('td');
  //       td.innerHTML = obj[key];
  //       tr.appendChild(td);
  //     }
  // }
  //   document.body.appendChild(table);
  // }


  // Table build
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < 2; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < 2; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode("cell in row "+i+", column "+j);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
  
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");

  // End table build




  // API Fetch Get Orderbook TO
  fetch(url)
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

     


// // (B) DUMMY ARRAY
// var data = ["doge", "cate", "birb", "doggo", "moon moon", "awkward seal"];

// // (C) CREATE HTML TABLE
// // (C1) HTML TABLE ELEMENT
// var myTable = document.createElement("table"),
//     row = myTable.insertRow(), cell;

// // (C2) LOOP THROUGH ARRAY & GENERATE ROWS-CELLS
// var perrow = 2; // 2 CELLS PER ROW
// data.forEach((value, i) => {
//   // ADD CELL
//   cell = row.insertCell();
//   cell.innerHTML = value;
//   // CLICK ON CELL TO DO SOMETHING
//   // cell.onclick = FUNCTION;

//   // TO PASS IN A RUNNING NUMBER OR PARAMETER
//   // cell.onclick = () => { console.log(i); };

//   // BREAK INTO NEXT ROW
//   var next = i + 1;
//   if (next%perrow==0 && next!=data.length) { row = myTable.insertRow(); }
// });

// // (D) ATTACH TABLE TO CONTAINER
// document.getElementById("container-2").appendChild(myTable);


         


    // LOOP Each Object/item in toMarket array en create table/row/etc. `Array.forEach()`
    // - Create myFunction that creates the html and then var.forEach(myFunction)
    // Example
    //   const fruits = ["Banana", "Orange", "Apple", "Mango"];

    //   let text = "<ul>";
    //   fruits.forEach(myFunction);
    //   text += "</ul>";

    //   function myFunction(value) {
    //     text += "<li>" + value + "</li>";
    //   }

    // (C) GENERATE TABLE
    // (C1) CREATE EMPTY TABLE
    var table = document.createElement("table"), row, cellA, cellB, temp;
    document.getElementById("demoTable").appendChild(table);



    // const headerData = Object.keys(toMarkets[0]);
    // const tr = table.insertRow(-1);

    // for(let i=0; i<headerData.length; i++){
    //   const th = document.createElement('th');
    //   th.innerHTML = headerData[i];
    //   tr.appendChild(th)
    // }
  //   for(let i=0; i<toMarkets.length; i++){
  //     const tr = table.insertRow(-1);
  //         const obj = toMarkets[i];
  //     for(let key in obj) {
  //         const td = document.createElement('td');
  //       td.innerHTML = obj[key];
  //       tr.appendChild(td);
  //     }
  // }



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
  let text = "";
  for (let i = 0; i < toMarkets.length; i++) {
    text += toMarkets[i];
    // create a row for each object (coin pair) in the array, elke coin een nieuwe row
    const tr = table.insertRow(-1);
    const obj = toMarkets[i];
    for(let key in obj) {
      const td = document.createElement('td');

      const headerData = Object.keys(toMarkets[0]);
      const tr = table.insertRow(-1);

      td.innerHTML = key;
      tr.appendChild(td);
      // cellB.appendChild(td);
      // Fill with items

    //   for(let i=0; i<headerData.length; i++){
    //     const th = document.createElement('th');
    //     th.innerHTML = headerData[i];
    // }
    // console.log(toMarkets[i]);
  } 
      // cellB.innerHTML = obj[key];
      // for(let key in obj) {
        // const td = document.createElement('td');
      // cellB.innerHTML = obj[key];
      // tr.appendChild(td);
    // }


    

  //   for(let i=0; i<toMarkets.length; i++){
  //     const tr = table.insertRow(-1);
  //         const obj = toMarkets[i];
  //     for(let key in obj) {
  //         const td = document.createElement('td');
  //       td.innerHTML = obj[key];
  //       tr.appendChild(td);
  //     }
  // }

  


      // cellB.innerHTML = obj[key];
      // cellB.innerHTML = headerData[key];
      cellC.innerHTML = "Ask Price:";
      cellD.innerHTML = getNestedObject(toMarkets,['4','BTC-ARRR','ask']);

    }
     

      // COLORS FIELD
      if (key==4) {

     

        // cellB.innerHTML = `<div>Coin: ${toMarkets[key]}</div><div>Volume: ${toBtcArrrVol[key]['4','BTC-ARRR','volume']}</div>`;
        // cellB.innerHTML = toMarkets[key].join(", ");
      }
      // PET FIELD
      else if (key=="") {
      }
      // OTHER FIELDS
      else {
        cellE.innerHTML = "Cell E";
        // cellC.innerHTML = getNestedObject(toMarkets,['4','BTC-ARRR','ask']);
      }

//  // ELSE CellC.innerHTML = getNestedObject(toMarkets, ['4','BTC-ARRR', 'volume']);
//  else {
//   cellC.innerHTML = getNestedObject(toMarkets, ['4','BTC-ARRR', 'volume']);
// }

      // (C4) ATTACH ROW & CELLS
      table.appendChild(row);
      row.appendChild(cellA);
      row.appendChild(cellB);
      row.appendChild(cellC);
      row.appendChild(cellD);
      row.appendChild(cellE);
      console.log("---TO Market Table Created---");
    }




     
  });
});



// // Add addEventListener to load json data
// window.addEventListener("load", function(){
//   // (B) PARSE THE JSON STRING INTO OBJECT FIRST
//   // var data = '{"Name":"John Doe","Email":"john@doe.com","Gender":"male"}';
//   var toMarkets = '{"Coin":"Bitcoin","Price":"6000000","YES":"GELUKT!"}';
//   toMarkets = JSON.parse(toMarkets);
//   // console.table(toMarkets);

//   // (C) GENERATE TABLE
//   // (C1) CREATE EMPTY TABLE
//   var table = document.createElement("table"), row, cellA, cellB;
//   document.getElementById("toWatcher").appendChild(table);
//   for (let key in toMarkets) {
//     // (C2) ROWS & CELLS
//     row = document.createElement("tr");
//     cellA = document.createElement("td");
//     cellB = document.createElement("td");

//     // (C3) KEY & VALUE
//     cellA.innerHTML = key;
//     cellB.innerHTML = toMarkets[key];

//     // (C4) ATTACH ROW & CELLS
//     table.appendChild(row);
//     row.appendChild(cellA);
//     row.appendChild(cellB);
//   }
// });


// const ul = document.getElementById('orders');
// function makeList() {
//   // Make a container element for the list
//   listContainer = document.createElement('div'),
//   // Make the list
//   listElement = document.createElement('ul'),
//   // Set up a loop that goes through the items in listItems one at a time
//   numberOfListItems = toMarkets.length,
//   listItem,
//   i;

//   // Add it to the page
//   document.getElementsByTagName('body')[0].appendChild(listContainer);
//   listContainer.appendChild(listElement);

//   for (i = 0; i < numberOfListItems; ++i) {
//       // create an item for each one
//       listItem = document.createElement('li');

//               // Add the item text
//               listItem.innerHTML = toMarkets[i];

//               // Add listItem to the listElement
//               listElement.appendChild(listItem);
//           }
//       }
// // Usage
// makeList();









// Adding Array Elements
//
// Example
//   const fruits = ["Banana", "Orange", "Apple"];
//   fruits.push("Lemon");  // Adds a new element (Lemon) to fruits




