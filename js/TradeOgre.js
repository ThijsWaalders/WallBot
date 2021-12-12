// TradeOgre.js
// Main code for TradeOgre API
// Declare global variables
const ex1Headers = ["Currency-Pair", "Volume", "Initialprice", "Ask", "Bid"];
let toMarkets = []; // TO Markets array with objects
const url = 'https://tradeogre.com/api/v1/'; // TradeOgre main api url
//
// Get the reference for the body elements
let getTHead = document.querySelector("thead");
let getTBody = document.getElementsByClassName("container__table__body");
let getSearchInput = document.getElementById("search-input");
let getAllTr = document.querySelectorAll('table tr')
//
// Create elements
let table = document.createElement("table");
let tr = table.insertRow();
let tHead = document.createElement("thead");
let tBody = document.createElement("tbody");
let td =  document.createElement("td");
//
// Create container and add the table
container.appendChild(table);
// Add correct classname for the table
table.className = "container__table";
table.id = "toTable";
// Set classname for tbody
table.firstChild.className = "container__table__body";
// Set classname for thead
tHead.className = "container__table__head";

//
// SEARCH / FILTER BOX - FUNCTION
function filterFunction() {
  // Declare variables
  let input, filter, table, tr, td, i, txtValue;
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

function sortTable(n) {
  let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("toTable");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      // THIS IS FOR NUMBERS
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
      // END THIS IS FOR NUMBERS
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

//
// ON LOAD FUNCTIONS
window.addEventListener("load", function(){
  let getTable = document.querySelector('.container__table');
  // let getTBody = document.getElementsByClassName("container__table__body");
  //
  // Keyup event to start search/filter after key is being released
  getSearchInput.onkeyup = function(){
    filterFunction();
    console.log("Filter now works on key release");
    // exclude ESCape ? after this function is working (clear the search-box)
  };

  //
  // CLEAR EMPTY ROWS - FUNCTION
  function clearEmptyRows(){
    document.querySelectorAll('table tr').forEach(function(e, i) {
      if (e.textContent.trim().length == 0) { // if row is empty
          e.parentNode.removeChild(e);
      }
    })
  }

  //
  // CLEAR SEARCH/FILTER BOX WHEN ESCape IS RELEASED
  getSearchInput.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        console.log("Escape");
        getSearchInput.value = "";
    }
  };

  //
  // BUILD TABLE HEAD
  // T1.1
  //
  function buildTableHead(){
      ex1Headers.forEach(headerText => {
          let th = document.createElement('th');
          let textNode = document.createTextNode(headerText);
          // at the end add .toLowerCase() to make text non capitalized
          th.className = "container__table__head__"+headerText.toUpperCase();
          //
          // DE 0 MOET OPTELLEN (iedere TH moet een getal hoger zijn / vs index nr)
          th.onclick = function (){sortTable(0)};
          // th.appendChild(button);
          th.appendChild(textNode);
          tr.appendChild(th);
          tHead.appendChild(th);
      });
      getTable.appendChild(tHead);
  };


  function buildTableBody(){
    // RUN buildTableHead function.
    buildTableHead();
    fetch(url+"markets").then(response => response.json()).then(data => createTable(data)).catch(error=>console.log(error))
      // Declare reference to body elements
      let getTBody = document.querySelector("tbody");
      const createTable = (data) => {
        // Store API response/data in array
        let toMarkets = data;
        //
        // BUILD TABLE BODY
        // T1.2 BUILD TABLE ROWS for each Object / Currency-Pair and set Classname
        let perRow = 1; // HOW MANY TD PER TR
        //
        // Execute a provided function once for each array element.
        //
        toMarkets.forEach((value, i) => {
          // clearEmptyRows(getTBody);
          let tr = table.insertRow(-1);
          // Create a table row and set classname
          tr.className = "container__table__body__"+Object.keys(toMarkets[i]);
          // Create reference for new row with coin classname
          let newRow = document.querySelector(".container__table__body__"+Object.keys(toMarkets[i]));
          // Create table cell and set innerHTML
          td.innerHTML = Object.keys(toMarkets[i]);
          // Append new td and add to the newRow
          newRow.appendChild(td);
           
           
           
          //
          // Create new TD for each property, put td's in newRow.appendChild-s-(all td)
          //
          // if classname == prop then add td to tr and set td's innerHTML with value
          //
          // Check if (i / item) / prop = object
          // if prop = obj then:
           
           
           
          // toMarkets.forEach(obj => {
          //   Object.entries(obj).forEach(([key, value]) => {
          //       console.log(`${key} ${value}`);
          //   });
          //   console.log('------------------- key = ' + key + " And value = " + value);
          // });
           
           
           
           
           
           
           
          // toMarkets.filter( item => {
          //   iterateObject(item);
          // });
          function iterateObject(obj) {
            for(prop in obj) {
              // console.log("OBJECT PROP IS: "+obj[prop]);
              if(typeof(obj[prop]) == "object"){
                // console.log("1. Console Log: "+prop);
                iterateObject(obj[prop]);
              } else {
                if(prop == "name" || prop == "volume") {
                  // console.log("2. Console Log: "+prop.toUpperCase() + ': ', obj[prop]);
                }
              }
            }
          }
          iterateObject(toMarkets);
          // forEach.prop (create td and set classname to prop.value)
          //
          // add td's to newRow
          //
          // test hier
          // ITERATE toMarkets AND CREATE TD'S FOR EACH PROP
          // SET CLASSNAME PER PROP
          //
          // ADD PROP VALUE TO THAT TD WITH CORRECT CLASSNAME

          // BREAK INTO NEXT ROW
          let next = i + 1;
          if (next%perRow==0 && next!=toMarkets.length) {
            td = tr.insertCell(-1);
          };
          clearEmptyRows();
        });




        // toMarkets.filter( item => {
        //   iterateObject(item);
        // });
        // function iterateObject(obj) {
        //   for(prop in obj) {
        //     if(typeof(obj[prop]) == "object"){
        //       console.log(prop);
        //       iterateObject(obj[prop]);
        //     } else {
        //       if(prop == "name" || prop == "volume") {
        //         console.log(prop.toUpperCase() + ': ', obj[prop]);
        //       }
        //     }
        //   }
        // }

        ////
        //// Iterate over properties of an object and its children objects
        // let dataObject = {
        //   firstName: "Steven",
        //   SecondName: "Hancock:",
        //   type: {
        //     type1: "admin:",
        //     type2: "user"
        //   },
        //   active: true
        // };

        // // If it's an object, then iterate that object
        // const isObject = function(val) {
        //   if (val === null) {
        //     // console.log("Object's property is not an object! --> "+val);
        //     return false;
        //   }
        //   // console.log("Object in Object Found! --> "+val);
        //   return (typeof val === 'object');
        // };

        // // Check if property/value is an object
        // const objProps = function(obj) {
        //   for (let val in obj) {
        //     // do this if it's an object in an object
        //     // console.log("CONSOLE.LOG 1: "+obj);
        //     if (isObject(obj[val])) {

        //       // console.log("CONSOLE.LOG 3: Object property value: "+obj[val])
        //       // console.log(isObject);
        //       objProps(obj[val]);
        //         // console.log("CONSOLE LOG 4: Object in Object found! "+objProps(obj[val]))
        //     } else {
        //                   // create a TD with val as classname and as innerHTML
        //     // console.log("CONSOLE.LOG 5: Object property (name): obj="+obj+" val="+val+" obj[val]="+obj[val]);
        //       // If its not an object do this
        //       // create new tablerow and set classname
        //       // console.log(val);
        //       //  console.log("CODE THIS: Create <td> and add to tableRow with classname val : "+val,obj[val]+" };");

        //       // let tr = table.insertRow();
        //       // cell1 = td.innerHTML = val,obj[val];
        //       // tr.classList.add(val);
        //       // tr = document.querySelector(val);
        //       // tr.insertCell(cell1);
        //       // let row = table.insertRow(0);
        //       // row.classList.add("container__table__body__"+prop);
        //       // let cell2 = row.insertCell(1);
        //       // console.log(prop + '7  OLUME: ', obj[prop]);
        //       // cell2.innerHTML = "OOOOO"+prop;
        //     }
        //   };
        // };
        // objProps(toMarkets);
        // clearEmptyRows();
      }
    };
  buildTableBody();
})

