// TradeOgre.js
// Main code for TradeOgre API
// Declare global variables
const ex1Headers = ["Currency-Pair", "Volume", "Initialprice (-24 hours)", "Ask", "Bid"];
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
      console.log("Filter now works on key release");
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
        // toMarkets.filter( item => {
        //   iterateObject(item);
        // });

        //
        // BUILD TABLE ROWS for each Object / Currency-Pair and set Classname
        //
        let perRow = 1; // HOW MANY TD PER TR
        toMarkets.forEach((value, i=-1) => {
          let tr = table.insertRow(0);
          // Create a table row and set classname
          tr.classList.add("container__table__body__"+Object.keys(toMarkets[i]));
          let newRow = document.querySelector(".container__table__body__"+Object.keys(toMarkets[i]));
          // Create table cell and set innerHTML
          newRow.appendChild(td);td.innerHTML = Object.keys(toMarkets[i]);
          // td = tr.insertCell(); // Deze stond boven td.innerHTML = ...
         
          // BREAK INTO NEXT ROW
          let next = i + 1;
          if (next%perRow==0 && next!=toMarkets.length) {
            // tr = table.insertRow();
            // let tr = table.insertRow(0);
            // Create a table row and set classname
            // tr.classList.add("container__table__body__"+Object.keys(toMarkets[i]));
            // // Create table cell and set innerHTML
            // td.innerHTML = Object.keys(toMarkets[i]);
            td = tr.insertCell();
          };
        });

        // Iterate over properties of an object and its children objects
        let dataObject = {
          firstName: "Steven",
          SecondName: "Hancock:",
          type: {
            type1: "admin:",
            type2: "user"
          },
          active: true
        };

        // If it's an object, then iterate that object
        const isObject = function(val) {
          if (val === null) {
            // console.log("Object's property is not an object! --> "+val);
            return false;
          }
          // console.log("Object in Object Found! --> "+val);
          return (typeof val === 'object');
        };

        // Check if property/value is an object
        const objProps = function(obj) {
          for (let val in obj) {
            // do this if it's an object in an object
            console.log(obj);
            // console.log("Object property (name): "+val);
              // // Create a table row and set classname
              // let row = table.insertRow(0);
              // row.classList.add("container__table__body__"+val);
            if (isObject(obj[val])) {

              // console.log("Object property value: "+obj[val])
              objProps(obj[val]);
              // for (let val2 in obj){
                // console.log("Object in Object found! "+val2, obj[val][val2])
              // }
            } else { 
              // If its not an object do this
              // create new tablerow and set classname
              // console.log(val);
              //  console.log("CODE THIS: Create <td> and add to tableRow with classname val : "+val,obj[val]+" };");
              
              
              // let tr = table.insertRow();
              // cell1 = td.innerHTML = val,obj[val];
              // tr.classList.add(val);
              // tr = document.querySelector(val);
              // tr.insertCell(cell1);
              // let row = table.insertRow(0);
              // row.classList.add("container__table__body__"+prop);
              // let cell2 = row.insertCell(1);
              // console.log(prop + '7  OLUME: ', obj[prop]);
              // cell2.innerHTML = "OOOOO"+prop;
            }
          };
        };
        objProps(toMarkets);




        function iterateObject(obj) {
          // console.log("1 obj = "+obj);
          for (prop in obj) {
            console.log("2 obj = "+prop); // volume naam
            console.log("3 prop = "+obj[prop]); // volume getal
            console.log("44 "+prop); //coin naam
            let row = table.insertRow(0);
            getElementsByTagName("tr").classList.add("container__table__body__"+prop);
            let mainRow = document.getElementsByClassName("container__table__body__"+prop);
            let cell1 = mainRow.insertCell(0);
            cell1.innerHTML = prop + "HAAAAAH"; // Currency-Pair
          }
            if (typeof(obj[prop]) == "object"){
              console.log("4 obj = "+prop); // coinprijs
              console.log("5 prop = "+obj[prop]);
              console.log("6 Is object hihi" + prop); // coinprijs
              // td.innerHTML = + obj;
              // td = tr.insertCell();
              // var table = document.getElementById("fetch");
              let td = document.createElement("td");

              //  let tdContent = document.createTextNode("-");
              //  td.appendChild(tdContent);
              //  row.appendChild(td);


              // var cell3 = row.insertCell(2);
              // var cell4 = row.insertCell(3);



              // cell2.innerHTML = "Cell2"+obj[prop];
              iterateObject(obj[prop]);
            }
            if (prop == "name" || prop == "volume") {
              let row = table.insertRow(0);
              row.classList.add("container__table__body__"+prop);
              let cell2 = mainRow.insertCell(1);
              console.log(prop + '7  OLUME: ', obj[prop]);
              cell2.innerHTML = "OOOOO"+prop;
              // var row = table.insertRow(0);
              // row.classList.add("container__table__body__"+prop);
              // let cell2 = row.insertCell(1);
              // console.log(prop + '7  OLUME: ', obj[prop]);
              //   cell2.innerHTML = prop.toUpperCase()+": "+obj[prop];
                // td.innerHTML = obj[prop];
                // td = tr.insertCell(1); // Deze stond boven td.innerHTML = ...
                // tr.classList.add(obj[prop]);
            }
            if (prop == "name" || prop == "ask") {
              // var row = table.insertRow(0);
              // row.classList.add("container__table__body__"+prop);
              let cell3 = mainRow.insertCell(2);
              console.log(prop + 'ASK: ', obj[prop]);
                cell3.innerHTML = "TEST"+obj[prop];
                // td.innerHTML = obj[prop];
                // td = tr.insertCell(1); // Deze stond boven td.innerHTML = ...
                // tr.classList.add(obj[prop]);
              }

          }
          // td.innerHTML = prop;
          // td = tr.insertCell(0); // Deze stond boven td.innerHTML = ...
          // tr.classList.add(prop);
        }



        // let perRow = 1; // HOW MANY TD PER TR
        // toMarkets.forEach((value, i) => {
        //   td.innerHTML = Object.keys(toMarkets[i]);
        //   td = tr.insertCell(0); // Deze stond boven td.innerHTML = ...
        //   tr.classList.add(Object.keys(toMarkets[i]));
        //   // BREAK INTO NEXT ROW
        //   let next = i + 1;
        //   if (next%perRow==0 && next!=toMarkets.length) {
        //     tr = table.insertRow(0);
        //   };
        // });
    };

  buildTableEx1();
})


  // function buildTableEx1(){
  //   fetch(url+"markets").then(response => response.json()).then(data => createTable(data)).catch(error=>console.log(error))
  //     // Delete first row from tbody
  //     let getTBody = document.querySelector("tbody");
  //     const createTable = (data) => {
  //       // Store API response/data in array
  //       let toMarkets = data;
  //       //
  //       // BUILD TABLE BODY
  //       //
  //       toMarkets.filter( item => {
  //         iterateObject(item);
  //       });

  //       function iterateObject(obj) {
  //         let td = document.createElement('td');
  //         for(prop in obj) {
  //           if(typeof(obj[prop]) == "object"){
  //             console.log(prop);
  //             // create 1 row met name
  //             let textNodeOne = document.createTextNode(prop);
  //             iterateObject(obj[prop]);
  //           } if(prop == "name" || prop == "Volume") {
  //               console.log(prop.toUpperCase() + ': ', obj[prop]);
  //               let textNodeTwo = document.createTextNode(obj[prop]);
  //               td.appendChild(textNodeTwo);

  //             }
  //           tr.appendChild(td);
  //           tBody.appendChild(tr);
  //           }
  //         }
  //       }


  //       getTable.appendChild(table);
  //   }
  //   buildTableHead();

    // function CreateTable(){
    //   // var table = document.getElementById("fetch");
    //   var row = table.insertRow(0);
    //   var cell1 = row.insertCell(0);
    //   var cell2 = row.insertCell(1);
    //   var cell3 = row.insertCell(2);
    //   var cell4 = row.insertCell(3);


    //   cell3.innerHTML = "Cell3";
    //   cell4.innerHTML = "Cell4";
    //   for(prop in obj) {
    //     if(typeof(obj[prop]) == "object"){
    //       console.log(prop);
    //       // create 1 row met name
    //       let textNodeOne = document.createTextNode(prop);
    //       cell1.innerHTML = tr + "Cell1" + textNodeOne;
    //       iterateObject(obj[prop]);
    //     } else {
    //       if(prop == "name" || prop == "Volume") {
    //         console.log(prop.toUpperCase() + ': ', obj[prop]);
    //         let textNodeTwo = document.createTextNode(obj[prop]);
    //         cell2.innerHTML = "Cell2" + textNodeTwo;

    //         // td.appendChild(textNodeTwo);
    //         // tr.appendChild(td);
    //         // tBody.appendChild(tr);
    //       }
    //     }
    //   }
    // };
    // CreateTable();

    //     toMarkets.filter( item => {

    //       iterateObject(item);
    //     });

    //     function iterateObject(obj) {
    //       const table = getTBody


    //       // console.log(obj);

    //       for(prop in obj) {
    //         // console.log(obj[prop]);
    //         // let cell = tr.insertCell();

    //         if(typeof(obj[prop]) == "object"){
    //           // let td = document.createElement('td');
    //           let textNodeOne = document.createTextNode(prop);
    //           const tr = table.insertRow(0);
    //           const cell1 = tr.insertCell(0);
    //           cell1.appendChild(textNodeOne);
    //           // tr.appendChild(cell1);

    //           tr.classList.add("currency-pair__"+prop);
    //           coinTr = document.getElementsByClassName("currency-pair__"+prop);
    //           // let coindd = tr;
    //           // tr.appendChild(cell1);
    //           // table.appendChild(tr);
    //           // console.log("bla");
    //           // Create new row and add rest of props in td, then add row to table body
    //           // textNode = document.createTextNode("TEST333: " + obj);
    //           // var table = document.getElementsByClassName("container__table__body");
    //           // var tr = table.insertRow(0);
    //           // var cell1 = tr.insertCell(0);
    //           // cell1.innerHTML = "Cell1" + prop;
    //           // tr.classList = "currency-pair__"+prop;
    //       //     td.appendChild(textNode);
    //       //     tr.appendChild(td);
    //       //     tBody.appendChild(td);
    //       // getTable.appendChild(tBody);


    //           // var cell1 = row.insertCell(0);
    //           // var cell2 = row.insertCell(1);
    //           // var cell3 = row.insertCell(2);
    //           // var cell4 = row.insertCell(3);
    //           // cell1.innerHTML = "Cell1";
    //           // cell2.innerHTML = "Cell2";
    //           // cell3.innerHTML = "Cell3";
    //           // cell4.innerHTML = "Cell4";


    //           // let text = document.createTextNode(prop.toUpperCase());
    //           // tr.classList = "currency-pair__"+prop;
    //           //Iterate over every index(cell) in each array(row)
    //           iterateObject(obj[prop]);
    //         }
    //         // let prevObject = tr.getElementsByClassName("TEEBLEROOW currency-pair__"+prop);
    //         // console.log(prevObject);

    //         // pa = document.getElementsByClassName("currency-pair"+prop);
    //          if(prop == "name" || prop == "volume") {
    //            console.log("2");
    //           let textNodeTwo = document.createTextNode("TEST"+obj[prop]);
    //           const tr = table.insertRow(0);
    //           const cell2 = tr.insertCell(1);
    //           cell2.appendChild(textNodeTwo);
    //           // tr.appendChild(cell1);
    //           // tr.classList = "currency-pair__"+prop;

    //           // let textNodeTwo = document.createTextNode(obj[prop]);
    //           // const cell2 = tr.insertCell(1);
    //           // cell2.appendChild(textNodeTwo);
    //           // // cPair.appendChild(cell2);
    //           // cell2.classList("WHOEPIEEE");
    //           // coinRow.appendChild(cell2);
    //           // coinRow.classList = "currency-pair__"+prop;
    //           // var cell2 = tr.insertCell(1);
    //           // cell2.innerHTML = "Cell2" + obj[prop];
    //           // let cell = document.createElement('td');
    //           // pa = document.getElementsByClassName("currency-pair"+prop);
    //           // textNode = document.createTextNode("VOLume: " + obj[prop]);
    //           // cell.appendChild(textNode);
    //           // tr.appendChild(cell);
    //           // cell.classList.add("object__prop__"+obj[prop]);
    //         }
    //         if(prop == "name" || prop == "ask") {
    //           let cell3 = tr.insertCell(2);
    //           cell3.innerHTML = "Cell3" + prop;
    //           // let cell = document.createElement('td');
    //           // textNode = document.createTextNode("ASK: " + obj[prop]);
    //           // cell.appendChild(textNode);
    //           // tr.appendChild(cell);
    //           cell.classList.add("object__prop__"+prop);
    //         }
    //         if(prop == "name" || prop == "bid") {
    //           var cell4 = tr.insertCell(3);
    //           cell4.innerHTML = "Cell4" + prop;
    //           // let cell = document.createElement('td');
    //           // textNode = document.createTextNode("BID: " + obj[prop]);
    //           // cell.appendChild(textNode);
    //           // tr.appendChild(cell);
    //           cell.classList.add("object__prop__"+prop);
    //         }
    //         if(prop == "name" || prop == "initialprice") {
    //           var cell5 = tr.insertCell(4);
    //           cell5.innerHTML = "Cell5" + prop;
    //           // let cell = document.createElement('td');
    //           // textNode = document.createTextNode("INIT: " + obj[prop]);
    //           // cell.appendChild(textNode);
    //           // tr.appendChild(cell);
    //           cell.classList.add("object__prop__"+prop);
    //         }
    //         getTBody.appendChild(tr);
    //       }
    //       // tr.appendChild(cell);
    //       // table.appendChild(tr);

    //       //
    //       //
    //       //

    //       //


    //     };          //
    //       //
    //     // let perRow = 1; // HOW MANY TD PER TR
    //     // toMarkets.forEach((value, i) => {
    //     //   td.innerHTML = Object.keys(toMarkets[i]);
    //     //   td = tr.insertCell();

    //     //   console.log("test");

    //     //   let next = i + 1;
    //     //   if (next%perRow==0 && next!=toMarkets.length) {
    //     //     tr = table.insertRow();
    //     //   };
    //     // }




    //                       // //setup our table array
    //                       // var tableArr = [
    //                       //   ["row 1, cell 1", "row 1, cell 2"],
    //                       //   ["row 2, cell 1", "row 2, cell 2"]
    //                       // ]//create a Table Object
    //                       // // let table = document.createElement('table');//iterate over every array(row) within tableArr
    //                       // for (let row of toMarkets) {//Insert a new row element into the table element
    //                       //   table.insertRow();//Iterate over every index(cell) in each array(row)
    //                       //   for (let cell of row) {//While iterating over the index(cell)
    //                       // //insert a cell into the table element
    //                       //     let newCell = table.rows[table.rows.length - 1].insertCell();//add text to the created cell element
    //                       //     newCell.textContent = cell;
    //                       //   }
    //                       // }//append the compiled table to the DOM
    //                       // document.body.appendChild(table);
    //       // td.innerHTML = Object.keys(toMarkets[i]);
    //       // td = tr.insertCell(); // Deze stond boven td.innerHTML = ...
    //       // BREAK INTO NEXT ROW

    //     // }); //foreach end


    //       // const isObject = function(val){
    //       //   if (val === null){
    //       //     return false;
    //       //   }
    //       //   return (typeof val === 'object');
    //       // };

    //       // const objProps = function(obj){
    //       //   for (let val in obj){
    //       //     if (isObject(obj[val])){
    //       //       objProps(obj[val]);
    //       //     } else {
    //       //       // console.log(val,obj[val]);
    //       //       td.innerHTML = (val,obj[val]);
    //       //       td = tr.insertCell();
    //       //     }
    //       //   }
    //       // };
    //       // objProps(toMarkets);
    //       // td.innerHTML = Object.keys(toMarkets[i]);
    //       // td = tr.insertCell(); // Deze stond boven td.innerHTML = ...

    // // fetch(url+"markets")
    // //   .then(data => data.json())
    // //   .then(data => {
    // //     dataObject = data;
    // //     console.log(typeof data); // check what type the api fetch is
    // //   })
    // //   .catch(error => {
    // //     dataObject = {};
    // //     console.log(error);
    // //   });

        // toMarkets.filter( item => {
        //   iterateObject(item);
        // });
        // function iterateObject(obj) {
        //   for(prop in obj) {
        //     if(typeof(obj[prop]) == "object"){
        //       iterateObject(obj[prop]);
        //     } else {
        //       if(prop == "name" || prop == "volume") {
        //         console.log(prop.toUpperCase() + ': ', obj[prop]);
        //       }
        //     }
        //   }
        // }
        // forEach(prop in obj)
        //   td.innerHTML = + obj;
        //   td = tr.insertCell(); // Deze stond boven td.innerHTML = ...
        //   // Write-Output "$($seatUsage.companyName), $($product.product), $($summary.currrentSeatUsage)"
        // }
        //
        // TEST to fit the rest of the data in table, first how to reach and console.log
        //
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
        //
        // END OF TEST
        //



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
// // ###################################################################

