//  main.js
// let toOrdersBtcArrr = {}
// let toBtcArrrPriceAsk = {}
// let toBtcArrrPriceBuy = {}

// Create Element function
function createNode(element) {
    return document.createElement(element);
}
// Append child
function append(parent, el) {
  return parent.appendChild(el);
}

// Declare global variables
const ul = document.getElementById('orders');
const url = 'https://tradeogre.com/api/v1/orders/BTC-ARRR';

// Fetch Get from url API
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let toOrdersBtcArrr = data.results;
  return toOrdersBtcArrr.map(function(ask) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    img.src = author.picture.medium;
    span.innerHTML = `${ask.value} ${buy.value}`;
    append(li, img);
    append(li, span);
    append(ul, li);
    console.log(toOrdersBtcArrr);
  })
})
.catch(function(error) {
  console.log(error);
});





// this is response from /markets
// json.markts [
//   {"BTC-AEON":
//      {"initialprice":"0.00022004",
//       "price":"0.00025992",
//       "high":"0.00025992",
//       "low":"0.00022003",
//       "volume":"0.00359066",
//       "bid":"0.00022456",
//       "ask":"0.00025993"
//     }
//   },
//   {"BTC-BTCP":
//     {"initialprice":"0.00300573",
//      "price":"0.00325000",
//      "high":"0.00379000",
//      "low":"0.00300010",
//      "volume":"0.04753022",
//      "bid":"0.00300099",
//      "ask":"0.00325000"
//     }
//   },
//   {"BTC-BTN":
//     {"initialprice":"0.00000032",
//      "price":"0.00000033",
//      "high":"0.00000033",
//      "low":"0.00000028",
//      "volume":"0.01306734",
//      "bid":"0.00000027",
//      "ask":"0.00000033"
//     }
//   },
//   {"BTC-CIV":
//   {"initialprice":"0.00032127",
//   'etc'...toMarkets..

//  GET request using fetch()

// const curPair = []
// const toMarkets = []

// fetch("https://tradeogre.com/api/v1/orders/BTC-ARRR")
//     // Converting received data to JSON
//     .then(response => response.json())
//     .then(json => {
//         // store fetch get request json in a let/const
//         // let marketsBtcArrr = json[4];
//         // toMarkets = json;
//         // console.log(markets);
//         // let li = `<tr><th>Currency Pair</th><th>Bid</th></tr>`;
//         // json.forEach(function(obj, data, index) {
//         //     json = data.date;
//         //     li += `<tr>
//         //     <td>${data.index} </td>
//         //     <td>${data.bid}</td>
//         //     </tr>`;
//         let list = document.getElementById("myList");

//         json.forEach((Object) => {
//           let li = document.createElement("li");
//           li.innerText = json;
//           list.appendChild(li);
//         });
//         // json.entries(json).forEach(([key, value]) => {
//         //     console.log(`${key} ${value}`);
//         // });
//         // const getNestedObject = (nestedObj, pathArr) => {
//         //     return pathArr.reduce((obj, key) =>
//         //         (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
//         // };
//         // console.log(getNestedObject);
//         // const toBtcArrr = json[4];

//         // const toMarkets = json;
//         // let list = document.getElementById("markets");
//         // json.forEach((item) => {
//         //     let li = document.createElement("li");
//         //     li.innerText = item;
//         //     list.appendChild(li);
//         // });
//         // console.log(marketsBtcArrr);
//         // console.log(markets);
//         // const btcArrrPrice = markets.item.price
//         // console.log(btcArrrPrice);
// });

        // // Create a variable to store HTML
        // let li = `<tr><th>Currency Pair</th><th>Bid</th></tr>`;
        // // Loop through each data and add a table row
        // json.forEach(Object, index => {
        //     li += `<tr>
        //         <td>${Object.index} </td>
        //         <td>${curPair.bid}</td>
        //     </tr>`;
        // });
    // Display result
    // document.getElementById("markets").innerHTML = li;
    // console.log(markets);




// https://tradeogre.com/api/v1/orders/BTC-ARRR

// // GET request using fetch()
// fetch("https://randomuser.me/api/?results=10")
//     // Converting received data to JSON
//     .then(response => response.json())
//     .then(json => {
//         // Create a variable to store HTML
//         let li = `<tr><th>Price</th><th>Sell</th></tr>`;
//         // Loop through each data and add a table row
//         json.forEach(key => {
//             li += `<tr>
//                 <td>${key.value} </td>
//                 <td>${key.value}</td>
//             </tr>`;
//         });
// console.log(json);
// //     // Display result
//     document.getElementById("markets").innerHTML = li;
// });

// const data = [];
// let list = document.getElementById("myList");

// data.forEach((item) => {
//   let li = document.createElement("li");
//   li.innerText = item;
//   list.appendChild(li);
// });




// let markets = [
//     {"BTC-ARRR":{
//                 "initialprice":"0",
//                 "price":"0",
//                 "high":"0",
//                 "low":"0",
//                 "volume":"0",
//                 "bid":"0",
//                 "ask":"0"
//                 }
//     },

// ];





// //  GET request using fetch()
// fetch("https://tradeogre.com/api/v1/markets")
//     // Converting received data to JSON
//     .then(response => response.json())
//     // .then(response => markets)
//     .then(json => {
//         // Create a variable to store HTML
//         let li = `<tr><th>Price</th><th>Bid</th><th>Ask</th><th>Volume</th></tr>`;

//         // store in array
//         const toMarket4 = json[4];
//         // console.log(toMarket4["BTC-ARRR"]);
//         // const toBtcArrr = toMarket4;
//         // console.log(toBtcArrr);

//         let list = document.getElementById("markets");

//         json.forEach((item) => {
//           let li = document.createElement("li");
//           li.innerText = item;
//           list.appendChild(li);
//         });



//         // Loop through each data and add a table row
//         // json.forEach(obj => {
//         //     li += `<tr>
//         //         <td>${obj.price} </td>
//         //         <td>${obj.bid}</td>
//         //         <td>${obj.ask}</td>
//         //         <td>${obj.volume}</td>
//         //     </tr>`;
//         // });
//     // Display result
//     console.log("Fetch response:");
//     console.log(json);
//     // console.log("markets" + markets);
//     document.getElementById("markets").innerHTML = li;

//     console.log("End fetch TO markets");
//     console.log("TO BTC-ARRR Price: ",json[4]);
//     console.log("TO BTC-DERO Price: ",json[21]);
// });







// // Fetch /markets

// // Create Array to store market info
// // let markets =

// function fetchMarkets(callback) {
//     fetch("https://tradeogre.com/api/v1/markets")
//        .then(response => response.json())
//        .then(json => callback(null, json))
//        .catch(error => callback(error, null))
// }

// fetchMarkets((error, data) => {
//     if (error)
//         console.log(error);
//     else
//         console.log(data)
//         // let markets = markets.data
// });



// // Fetch /orders/BTC-ARRR
// function fetchOrdersBtcArrr(callback) {
//     fetch("https://tradeogre.com/api/v1/orders/BTC-ARRR")
//        .then(response => response.json())
//        .then(json => callback(null, json))
//        .catch(error => callback(error, null))
// }

// fetchOrdersBtcArrr((error, data) => {
//     if (error)
//         console.log(error);
//     else
//         console.log(data)

//     let buyArrr = data.buy
//     $(".buyArrr").append(buyArrr);
// });










// fetch("https://tradeogre.com/api/v1/account/balance", {
//     "method": "POST",
//     // "Access-Control-Allow-Origin": "origin-list",
//     "headers": {
//         "accept": "application/json",
//         "x-rapidapi-host": "https://tradeogre.com/api/v1/",
//         "x-rapidapi-key": "ba8e9b679c9f2bda9d02a0193b33296a",
//         "currency": "ARRR"
//     }
// })



// fetch("YOU_API_URL_HERE", {
//     "method": "GET",
//     "headers": {
//         "accept": "application/json",
//         "x-rapidapi-host": "YOUR_API_HOST_ADDRESS",
//         "x-rapidapi-key": "YOUR_API_KEY_HERE",
//     }
// })





// TO API HELP page
// https://tradeogre.com/help/api

// $.getJSON(
//     "https://tradeogre.com/api/v1/orders/BTC-ARRR",
//      function(data) {
//         console.log(data);

//         const icon = "https://tradeogre.com/img/coins/ARRR.png"
//     }
// )



// var fetchOrdersToBtcArrr =


// fetchOrdersToBtcArrr(callback)
//     fetch('https://tradeogre.com/api/v1/orders/BTC-ARRR')
//         .then(response => response.json())
//         .then(json => callback(null, json.orders))
//         .catch(error => callback(error, null))



// fetchOrdersToBtcArrr((error, orders) => {
//     if (error)
//         console.log(error)
//     else
//         console.log(orders [0])

// });


// https://tradeogre.com/api/v1/orders/BTC-ARRR


//
// Define a function like:

// fetchRestaurants(callback) {
//     fetch(`http://www.restaurants.com`)
//        .then(response => response.json())
//        .then(json => callback(null, json.restaurants))
//        .catch(error => callback(error, null))
// }

// Then use it like this:

// fetchRestaurants((error, restaurants) => {
//     if (error)
//         console.log(error)
//     else
//         console.log(restaurants[0])

// });

