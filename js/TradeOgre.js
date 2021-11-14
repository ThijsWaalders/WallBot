//  main.js
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

});