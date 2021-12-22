// TradeOgre.js
// Declare global variables
const ex1Headers = ["Markets", "Initialprice", "Price", "High", "Low", "Volume", "Bid", "Ask"];
let toMarkets = []; // TO Markets array with objects
const url = 'https://tradeogre.com/api/v1/'; // TradeOgre main api url
// Get the reference for the body elements
let getTHead = document.querySelector("thead");
let getTBody = document.getElementsByClassName("container__table__body");
let getSearchInput = document.getElementById("search-input");
let getAllTr = document.querySelectorAll('table tr')

// Create buttonLive elements
let button = document.createElement("button");
button.type = "button";
button.classList = "container__button__offline";
button.value = "off";
button.id = "btn-live";
button.innerText = "OFFLINE";
container.appendChild(button);

// Create container elements
let table = document.createElement("table");
let tr = table.insertRow();
let tHead = document.createElement("thead");
let tBody = document.createElement("tbody");
let td =  document.createElement("td");
// Create container and add the table
container.appendChild(table);
// Add correct classname for the table
table.className = "container__table";
table.id = "toTable";
// Set classname for tbody
table.firstChild.className = "container__table__body";
// Set classname for thead
tHead.className = "container__table__head";
// Search/Filter function
function filterFunction() {
  // Declare variables
  let input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search-input");
  filter = input.value.toUpperCase();
  table = document.getElementById("toTable");
  tr = table.getElementsByTagName("tr");
  /**
   * @description Loop through all table rows, and hide those who don't match the search query.
   * @param  {} i=0;i<tr.length;i++
   */
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
// Sort the table from A-Z / Z-A when table header is clicked
function sortTable(n) {
  let table, rows, switching, i, x, y, shouldSwitch, dir, switchCount = 0;
  table = document.getElementById("toTable");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /**
   * @description Make a loop that will continue until no switching has been done:
   */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /**
     * @description
     * Loop through all table rows (except the first, which contains table headers):
     *
     * MAYBE EDIT THIS 1 TO 0 IF IT SKIPS THE FIRST ONE
     * @param  {} i=1;i<(rows.length-1
     * @param  {} ;i++
     */
    for (i = 0; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /**
       * @description Check if the two rows should switch place,
       * based on the direction, asc or desc:
       * @param  {} dir=="asc"
       */
      if (dir == "asc") {
        /**
         * @param  {} x.innerHTML.toLowerCase()
         * @param  {} y.innerHTML.toLowerCase()
         */
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        /**
         * @param  {} x.innerHTML.toLowerCase()
         * @param  {} y.innerHTML.toLowerCase()
         */
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      /**
       * @description USE THIS FOR NUMBERS.
       * If innerHTML is a number use this function to sort from 0-9 / 9-0.
       * @param  {} Number(x.innerHTML)
       * @param  {} Number(y.innerHTML)
       */
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
      // END USE THIS FOR NUMBERS.
    }
    /**
     * @description If a switch has been marked,
     * make the switch and mark that a switch has been done:
     * @param  {} shouldSwitch
     */
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchCount ++;
    } else {
      /**
       * @description If no switching has been done AND the direction is "asc",
       * set the direction to "desc" and run the while loop again.
       * @param  {} switchCount==0&&dir=="asc"
       */
      if (switchCount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
/**
 * @description On load functions
 * @param  {} "load"
 * @param  {} function()
 */
window.addEventListener("load", function(){
  let getTable = document.querySelector('.container__table');
  // Keyup event to start search/filter after key is being released
  getSearchInput.onkeyup = function(){
    filterFunction();
  };
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
        // console.log("Escape");
        getSearchInput.value = "";
    }
  };
  // Build Table Head
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
  buildTableHead();
  // Fetch API and create Table Body iterating over nested objects and fill the table from API data
  function buildTableBody(){
    fetch(url+"markets").then(response => response.json()).then(data => createTable(data)).catch(error=>console.log(error))
    let getTBody = document.querySelector("tbody");
    const createTable = (data) => {
      // Store API response/data in array
      let toMarkets = data;
      getTBody.innerHTML = ""; // clear for liveUpdate new data
      toMarkets.filter( item => {
        iterateObject(item);
      });
      function iterateObject(obj) { // Iterate over nested objects and fill the table
        for(prop in obj) {
          if(typeof(obj[prop]) == "object"){
            // console.log("01 <tr> Currency-pair: classList = " + prop); // logt elke coin (If object prop = object) deze gebruiken voor table rows per cur-pair?
            let tr = table.insertRow(-1);
            // Create a table row and set classname
            tr.className = "container__table__body__"+ prop;
            // Create reference for new row with coin classname
            let newRow = document.querySelector(".container__table__body__" + prop);
            // Create table cell and set innerHTML
            td.innerHTML = prop;
            // Append new td and add to the newRow
            newRow.appendChild(td);
          } if (prop == "name" || prop == "initialprice") {
              let lastRow = getTable.rows[ table.rows.length - 1 ];
              let td =  document.createElement("td"); // is deze wel echt nodig?
              td.innerHTML = obj[prop];
              td.className = prop;
              lastRow.appendChild(td);
            } if (prop =="name" || prop == "price") {
                let lastRow = getTable.rows[ table.rows.length - 1 ];
                let td =  document.createElement("td"); // is deze wel echt nodig?
                td.innerHTML = obj[prop];
                td.className = prop;
                lastRow.appendChild(td);
              } if (prop =="name" || prop == "high") {
                  let lastRow = getTable.rows[ table.rows.length - 1 ];
                  let td =  document.createElement("td"); // is deze wel echt nodig?
                  td.innerHTML = obj[prop];
                  td.className = prop;
                  lastRow.appendChild(td);
                } if (prop =="name" || prop == "low") {
                  let lastRow = getTable.rows[ table.rows.length - 1 ];
                  let td =  document.createElement("td"); // is deze wel echt nodig?
                  td.innerHTML = obj[prop];
                  td.className = prop;
                  lastRow.appendChild(td);
                  }  if (prop =="name" || prop == "volume") {
                  let lastRow = getTable.rows[ table.rows.length - 1 ];
                  let td =  document.createElement("td"); // is deze wel echt nodig?
                  td.innerHTML = obj[prop];
                  td.className = prop;
                  lastRow.appendChild(td);
                    } if (prop =="name" || prop == "bid") {
                    let lastRow = getTable.rows[ table.rows.length - 1 ];
                    let td =  document.createElement("td"); // is deze wel echt nodig?
                    td.innerHTML = obj[prop];
                    td.className = prop;
                    lastRow.appendChild(td);
                      } if (prop =="name" || prop == "ask") {
                      let lastRow = getTable.rows[ table.rows.length - 1 ];
                      let td =  document.createElement("td"); // is deze wel echt nodig?
                      td.innerHTML = obj[prop];
                      td.className = prop;
                      lastRow.appendChild(td);
                        };
          let i = 0;
          let next = i + 1;
          let perRow = 1; // HOW MANY TD PER TR
          if (next%perRow==0 && next!=obj.length) {
            td = tr.insertCell(-1);
            clearEmptyRows();
            iterateObject(obj[prop]);
          };
        }
      };
    }
  };
  buildTableBody();
  /**
   * @description CLEAR EMPTY ROWS - FUNCTION
   */
  function clearEmptyRows(){
      document.querySelectorAll('table tr').forEach(function(e, i) {
        if (e.textContent.trim().length == 0) { // if row is empty
            e.parentNode.removeChild(e);
        }
      })
  };

  // addEventListener to setInterval when clicked and value=off, then set value=on
  //
  // in switch do this:
  //
  // addEventListener to clearInterval when value=on and button is clicked: change event and set value=off
  // btnLiveTxt.innerText = "OFFLINE";
  // btnLiveTxt.value = "off";
  //
  // addEventListener to setInterval when value=off and button is clicked: change event and set value=on
  // btnLiveTxt.innerText = "ONLINE";
  // btnLiveTxt.value = "on";

  const btnLive = document.getElementById('btn-live');
  let btnLiveInt;

    btnLive.addEventListener("click", function () {
      switch(btnLive.value) {
        case "off":
          // change evenlistener here to turn it off
          // btnLive.addEventListener('change', function(){});
          // btnLive.removeEventListener("click", btnLiveInt);

          // btnLive.addEventListener("click", function () {
            btnLiveInt = setInterval(function(){
              buildTableBody();
              console.log("TEST 1 interval");
            },3000);
          // });
          console.log("TEST 2 after interval");
          // console.log ("Case = ON");
          btnLive.classList = "container__button__online";
          btnLive.innerText = "ONLINE";
          btnLive.value = "on";
          // code block
          break;
        case "on":
          // change evenlistener here to turn it on again
          // btnLive.addEventListener('change', function(){});
          // btnLive.removeEventListener("click", btnLiveInt);
          btnLive.addEventListener('click', function(){
            clearInterval('btnLiveInt');
          });
          // console.log("Case = OFF");
          btnLive.classList = "container__button__offline";
          btnLive.innerText = "OFFLINE";
          btnLive.value = "off";
          // code block
          break;
        default:
          // code block
      }

      // btnLiveInt = setInterval(function(){
      // btnLive.innerText = "ONLINE";
    // },3000);
  });

  // switch(btnLive) {
  //   case value="off":
  //     // change evenlistener here to turn it off
  //     // btnLive.addEventListener('change', function(){});
  //     btnLive.addEventListener("change", function () {
  //       btnLiveInt = setInterval(function(){
  //         btnLive.innerText = "ONLINE";
  //       },3000);
  //     });
  //     console.log("btnLive value=off, starting liveRefresh and set button value=on");
  //     btnLive.innerText = "ONLINE switch";
  //     btnLive.value = "on";
  //     // code block
  //     break;
  //   case value="on":
  //     // change evenlistener here to turn it on again
  //     // btnLive.addEventListener('change', function(){});
  //     btnLive.addEventListener('change', function(){
  //       clearInterval('btnLiveInt');
  //     });
  //     console.log("btnLive value=on");
  //     btnLive.innerText = "OFFLINE switch";
  //     btnLive.value = "off";
  //     // code block
  //     break;
  //   default:
  //     // code block
  // }

  //
});








  // var idVar = setInterval(() => {
  //   timer()
  // }, 1000);

  // function timer() {
  //   var dateVar = new Date();
  //   var time = dateVar.toLocaleTimeString();
  //   document.getElementById("onoff").innerHTML = time;
  // }

  // function myStopFunction() {
  //   clearInterval(idVar);
  // }

  // function goLive () {
  //   let timer = null;
  //     if(getButtonLive == "off"){
  //       document.getElementById("onoff").value="on";
  //       timer = setInterval(function() {
  //         buildTableBody();
  //         // let getFooter = document.querySelector(".container__footer");
  //         // let ard = document.createElement("h5");
  //         // ard.innerHTML = `Last Update: ${ new Date(toMarkets.lastUpdated).toLocaleString() }`; // `npm i expres` ?
  //         // getFooter.appendChild(ard);
  //         // getButtonLive.id += "start"
  //         console.log("ONLINE");
  //       },3000);
  //     }else{
  //       document.getElementById("onoff").value="off";
  //       console.log("OFFLINE??");
  //       clearInterval(timer);
  //     }
  // }
  // buttonLive.addEventListener("click", function (){
  //   getButtonLive = document.getElementById('onoff').value;
  // goLive();
  // });


/* <input type="button" name="btn" id='btn' value="Start" onclick="to_start()"; */

          // // document.getElementById("onoff").value="off";
          // buttonLive.value('off').addEventListener("click", function (){
          //   // getButtonLiveValue = document.getElementById("onoff").value;
          //   console.log("LOG VOOR onclick");
          //   onclick="liveRefresh()";
          //   console.log("LOG NA onclick");
          //   console.log("liveRefresh = ON!");
          //   // goLive();
          // });

          // function liveRefresh(){
          //   switch(document.getElementById('btn').value){
          //     case  'off':
          //     window.clearInterval(tm); // stop the timer
          //     document.getElementById('btn').value='on';
          //     console.log("CLICK 2");
          //     break;
          //     case  'on':
          //     console.log("setInterval...")
          //     tm=window.setInterval('disp()',3000);
          //     document.getElementById('btn').value='off';
          //     console.log("CLICK");
          //     break;
          //   }
          // }

  //   function disp(){
  //   // Format the output by adding 0 if it is single digit //
  //     if(s<10){var s1='0' + s;}
  //     else{var s1=s;}
  //     if(m<10){var m1='0' + m;}
  //     else{var m1=m;}
  //     if(h<10){var h1='0' + h;}
  //     else{var h1=h;}
  //     // Display the output //
  //     str= h1 + ':' + m1 +':' + s1 ;
  //     document.getElementById('n1').innerHTML=str;
  //     // Calculate the stop watch //
  //     if(s<59){
  //     s=s+1;
  //     }else{
  //       s=0;
  //       m=m+1;
  //       if(m==60){
  //         m=0;
  //         h=h+1;
  //       } // end if  m ==60
  //     }// end if else s < 59
  //   // end of calculation for next display
  //   }








  // buttonLive.addEventListener("click", function (){
  //   // getButtonLiveValue = document.getElementById("onoff").value;
  // goLive();
  // });

  // function goLive(){
  //   let tm = null;
  //   switch(document.getElementById("onoff").value){
  //     case  'on':
  //     window.clearInterval(tm); // stop the timer
  //     document.getElementById("onoff").value='on';
  //     buttonLive.className = "offline";
  //     buttonLive.innerText = "OFFLINE";
  //     break;
  //     case  'off':
  //     document.getElementById("onoff").value='off';
  //     buttonLive.className = "online";
  //     buttonLive.innerText = "ONLINE";
  //     tm=window.setInterval(buildTableBody,3000);

  //   }
  // }
//
// TIMER STOPT NOG STEEDS NIET??!?!?!
//



// // variable to store our intervalID
// let buttonLive = document.getElementById("onoff");

// function startLiveRefresh() {
//   // check if already an interval has been set up
//   if (!buttonLive === "off") {
//     document.getElementById("onoff").value="on";
//     buttonLive = setInterval(liveRefresh, 1000);
//   } else {
//     buttonLive = clearInterval();
//   }
// }

            // function liveRefresh() {
            //   const getButtonLive = document.getElementById("onoff");
            //   if (buttonLive.className === "on") {
            //     buttonLive.className = "off";
            //   } else {
            //     buttonLive.className = "on";
            //   }
            // }

            // function stopLiveRefresh() {
            //   clearInterval(buttonLive);
            //   // release our intervalID from the variable
            //   buttonLive = null;
            // }

// let liveOff = document.getElementById("onoff").value="off";
// let liveOn = document.getElementById("onoff").value="on";

// liveOff.addEventListener("click", startLiveRefresh);
// liveOn.addEventListener("click", stopLiveRefresh);


// liveRefresh let moet een switch functie worden. 1 functie voor on en 1 voor wanneer off
// #onoff button met addEventListener voor value=off {setInterval}
    // + functie met 2 change events
      // 1 voor wanneer switch op on gaat
      // 1 voor wanneer switch weer op off gaat



//
//
// const btnTxt = document.getElementById("btn-text");
// const btnOn = document.getElementById("btn-on");

// Set next after click?
// const btnOff = document.getElementById("btn-off");
// btnOn.addEventListener("click", function (){
// //script hier
// });
//
//






// var liveRefresh = this.setInterval(() => {
//   buildTableBody;
//   console.log("liveRefresh = ON");
// }, 3000);

// // function buildTableBody

// function stopLiveRefresh() {
//   clearInterval(liveRefresh);
//   console.log("liveRefresh = OFF");
// }

// const btnLive = document.getElementById("btnLive");

// buttonLive.addEventListener('click', liveRefresh)
//   switch(btnLive.value){
//     case  'off':
//       // event CHANGE! ipv add
//       stopLiveRefresh();
//       btnLive.addEventListener('change', function(){
//         liveRefresh;
//       });
//       console.log("JAAAAAAA");
//       // window.clearInterval(tm); // stop the timer
//       console.log("stopLiveRefresh");
//     break;
//     case  'on':
//       // event CHANGE! ipv add
//       console.log("setInterval...")
//       liveRefresh;
//       btnLive.addEventListener('change', function(){
//         stopLiveRefresh;
//       });
//       // tm=window.setInterval('disp()',3000);
//       console.log("NEEEEEEE");
//     break;
//   }


// getLiveButton...
// clearIntervalelement.addEventListener('change', function(){
  // handle change
// });





// when btn switch = on, function stopLiveRefresh
// when btn switch = off, function liveRefresh











//     let timer = null;
//       if(getButtonLive == "off"){
//         document.getElementById("onoff").value="on";
//         timer = setInterval(function() {
//           buildTableBody();
//           console.log("ONLINE");
//         },3000);
//         buttonLive.innerText = "ONLINE";
//         buttonLive.classList = "on";
//       }else{
//         document.getElementById("onoff").value="off";
//         // console.log("OFFLINE??");
//         clearInterval(timer);
//         buttonLive.innerText = "OFFLINE";
//         buttonLive.classList = "off";
//       }
//   buttonLive.addEventListener("click", function (){
//     getButtonLive = document.getElementById("onoff").value;
//   startInterval();
//   // getButtonLive.id = "onoff";
//   getButtonLive.innerText = "ONLINE";
//   });

//   // button = off/offline = eventlistener startInterval on click
//   // then on click, change to when on click stopInterval

// // DEZE HIERBOVEN OPNIEUW HIER ONDER MAAR IPV ID CLASSNAMES
// document.getElementById("off").addEventListener("click", startInterval);
// // document.getElementById("on").addEventListener("click", stopInterval);
// // You'll need a variable to store a reference to the timer
// var timer = null;
// function startInterval() {
//   // Then you initilize the variable
//   timer = setInterval(function() {
//     console.log("Foo Executed!");
//   }, 1500);
//   document.getElementById("#off").EventListener("click", stopInterval);
//   // document.getElementById("#off").addEventListener("click", startInterval);
// }
// function stopInterval() {
//   // To cancel an interval, pass the timer to clearInterval()
//   clearInterval(timer);
//   document.getElementById("#on").removeEventListener("click", startInterval);
//   // document.getElementById("#on").addEventListener("click", stopInterval);

// }



// HTML
/* <button type="button" id="start">Start</button>
<button type="button" id="stop">Stop</button> */
// end HTML

