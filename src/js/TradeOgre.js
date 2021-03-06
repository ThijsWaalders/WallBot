// TradeOgre.js
// Declare global variables
const ex1Headers = [
	'Markets',
	'Initialprice',
	'Price',
	'High',
	'Low',
	'Volume',
	'Bid',
	'Ask',
];
let toMarkets = []; // TO Markets array with objects
const url = 'https://tradeogre.com/api/v1/'; // TradeOgre main api url
// Get the reference for the body elements
let getTHead = document.querySelector('thead');
let getTBody = document.getElementsByClassName('container__table__body');
let getSearchInput = document.getElementById('search-input');
let getAllTr = document.querySelectorAll('table tr');

// Create btnLive elements
let button = document.createElement('button');
button.type = 'button';
button.classList = 'container__button-offline';
button.value = 'on';
button.id = 'btn-live';
button.innerText = 'OFFLINE';
headerColTwo.appendChild(button);

// Create container elements
let table = document.createElement('table');
let tr = table.insertRow();
let tHead = document.createElement('thead');
let tBody = document.createElement('tbody');
let td = document.createElement('td');
// Create container and add the table
container.appendChild(table);
// Add correct classname for the table
table.className = 'container__table';
table.id = 'toTable';
// Set classname for tbody
table.firstChild.className = 'container__table__body';
// Set classname for thead
tHead.className = 'container__table__head';

// Search/Filter function
/**
 * @description JSDoc test this should be a function that filters the table data from search-input
 * @type {function}
 * */

function filterFunction() {
	// Start timer to see how long this function takes to complete
	console.time('filterFunction');
	// Declare variables
	let input, filter, table, tr, td, i, txtValue;
	input = document.getElementById('search-input');
	filter = input.value.toUpperCase();
	table = document.getElementById('toTable');
	tr = table.getElementsByTagName('tr');
	/**
	 * @description Loop through all table rows, and hide those who don't match the search query.
	 * @param  {} i=0;i<tr.length;i++
	 */
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName('td')[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = '';
			} else {
				tr[i].style.display = 'none';
			}
		}
	}
	// Stop timer
	console.timeEnd('filterFunction');
}

/**
 * @description Sort Table Body Columns by clicking on the table headers
 * @type {function}
 * */
function sortTableII() {
	// Query the table
	const table = document.getElementById('toTable');
	// Query the headers
	const headers = table.querySelectorAll('th');
	// Loop over the headers
	ex1Headers.forEach.call(headers, function (header, index) {
		header.addEventListener('click', function () {
			// This function will sort the column
			sortColumn(index);
		});
	});
	// Query all rows
	const tableBody = table.querySelector('tbody');
	const rows = tableBody.querySelectorAll('tr');
	const sortColumn = function (index) {
		// Clone the rows
		const newRows = Array.from(rows);
		// Sort rows by the content of cells
		newRows.sort(function (rowA, rowB) {
			const cellA = rowA.querySelectorAll('td')[index].innerHTML;
			const cellB = rowB.querySelectorAll('td')[index].innerHTML;
			// Transform the content of cells
			const a = transform(index, cellA);
			const b = transform(index, cellB);
			// And compare them
			switch (true) {
				case a > b:
					return 1;
				case a < b:
					return -1;
				case a === b:
					return 0;
			}
		});
		// Remove old rows
		[].forEach.call(rows, function (row) {
			tableBody.removeChild(row);
		});
		// Append new row
		newRows.forEach(function (newRow) {
			tableBody.appendChild(newRow);
		});
	};
	// Transform the content of given cell in given column
	const transform = function (index, content) {
		// Get the data type of column
		const type = headers[index].getAttribute('data-type');
		switch (type) {
			case 'number':
				return parseFloat(content);
			case 'string':
			default:
				return content;
		}
	};
}

/**
 * @description Sort the table from A-Z / Z-A when table header is clicked
 * @type {function}
 * @param {*} n
 * */
function sortTable(n) {
	let table,
		rows,
		switching,
		i,
		x,
		y,
		shouldSwitch,
		dir,
		switchCount = 0;
	table = document.getElementById('toTable');
	switching = true;
	// Set the sorting direction to ascending:
	dir = 'asc';
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
		for (i = 0; i < rows.length - 1; i++) {
			// Start by saying there should be no switching:
			shouldSwitch = false;
			/* Get the two elements you want to compare,
      one from current row and one from the next: */
			x = rows[i].getElementsByTagName('TD')[n];
			y = rows[i + 1].getElementsByTagName('TD')[n];
			/**
			 * @description Check if the two rows should switch place,
			 * based on the direction, asc or desc:
			 * @param  {} dir=="asc"
			 */
			if (dir == 'asc') {
				/**
				 * @param  {} x.innerHTML.toLowerCase()
				 * @param  {} y.innerHTML.toLowerCase()
				 */
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
					// If so, mark as a switch and break the loop:
					shouldSwitch = true;
					break;
				}
			} else if (dir == 'desc') {
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
			 * If innerHTML is a number use this function to sort from 0-9 / 9-0.
			 * @type {function}
			 * @param  {} Number(x.innerHTML)
			 * @param  {} Number(y.innerHTML)
			 * */
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
			switchCount++;
		} else {
			/**
			 * If no switching has been done AND the direction is "asc",
			 * set the direction to "desc" and run the while loop again.
			 * @type {number}
			 * @param  {} switchCount==0&&dir=="asc"
			 */
			if (switchCount == 0 && dir == 'asc') {
				dir = 'desc';
				switching = true;
			}
		}
	}
}

/**
 * @description On Load Event functions
 * @event Load
 * @type {event}
 * @param {}
 * */
window.addEventListener('load', function () {
	let getTable = document.querySelector('.container__table');
	// Keyup event to start search/filter after key is being released
	getSearchInput.onkeyup = function () {
		filterFunction();
	};
	// CLEAR SEARCH/FILTER BOX WHEN ESCape IS RELEASED
	getSearchInput.onkeydown = function (evt) {
		evt = evt || window.event;
		var isEscape = false;
		if ('key' in evt) {
			isEscape = evt.key === 'Escape' || evt.key === 'Esc';
		} else {
			isEscape = evt.keyCode === 27;
		}
		if (isEscape) {
			// console.log("Escape");
			getSearchInput.value = '';
		}
	};
	// Build Table Head
	function buildTableHead() {
		ex1Headers.forEach(headerText => {
			let th = document.createElement('th');
			let textNode = document.createTextNode(headerText);
			// at the end add .toLowerCase() to make text non capitalized
			th.className =
				'container__table__head__' + headerText.toUpperCase();
			// DE 0 MOET OPTELLEN (iedere TH moet een getal hoger zijn / vs index nr (While loop))
			th.onclick = function () {
				sortTable(0);
			};
			// th.type=typeof[];
			// th.appendChild(button);
			th.appendChild(textNode);
			tr.appendChild(th);
			tHead.appendChild(th);
		});
		getTable.appendChild(tHead);
	}
	buildTableHead();
	// sortTableII();
	// Fetch API and create Table Body iterating over nested objects and fill the table from API data
	function buildTableBody() {
		fetch(url + 'markets')
			.then(response => response.json())
			.then(data => createTable(data))
			.catch(error => console.log(error));
		let getTBody = document.querySelector('tbody');
		const createTable = data => {
			// Store API response/data in array
			let toMarkets = data;
			getTBody.innerHTML = ''; // clear for liveUpdate new data
			toMarkets.filter(item => {
				iterateObject(item);
			});
			function iterateObject(obj) {
				// Iterate over nested objects and fill the table
				for (prop in obj) {
					if (typeof obj[prop] == 'object') {
						// console.log("01 <tr> Currency-pair: classList = " + prop); // logt elke coin (If object prop = object) deze gebruiken voor table rows per cur-pair?
						let tr = table.insertRow(-1);
						// Create a table row and set classname
						tr.className = 'container__table__body__' + prop;
						// Create reference for new row with coin classname
						let newRow = document.querySelector(
							'.container__table__body__' + prop
						);
						// Create table cell and set innerHTML
						td.innerHTML = prop;
						// Append new td and add to the newRow
						newRow.appendChild(td);
					}
					if (prop == 'name' || prop == 'initialprice') {
						let lastRow = getTable.rows[table.rows.length - 1];
						let td = document.createElement('td'); // is deze wel echt nodig?
						td.innerHTML = obj[prop];
						// console.log(typeof(td.innerHTML));
						td.className = prop;
						lastRow.appendChild(td);
					}
					if (prop == 'name' || prop == 'price') {
						let lastRow = getTable.rows[table.rows.length - 1];
						let td = document.createElement('td'); // is deze wel echt nodig?
						td.innerHTML = obj[prop];
						// console.log(typeof td.innerHTML);
						td.className = prop;
						lastRow.appendChild(td);
					}
					if (prop == 'name' || prop == 'high') {
						let lastRow = getTable.rows[table.rows.length - 1];
						let td = document.createElement('td'); // is deze wel echt nodig?
						td.innerHTML = obj[prop];
						td.className = prop;
						lastRow.appendChild(td);
					}
					if (prop == 'name' || prop == 'low') {
						let lastRow = getTable.rows[table.rows.length - 1];
						let td = document.createElement('td'); // is deze wel echt nodig?
						td.innerHTML = obj[prop];
						td.className = prop;
						lastRow.appendChild(td);
					}
					if (prop == 'name' || prop == 'volume') {
						let lastRow = getTable.rows[table.rows.length - 1];
						let td = document.createElement('td'); // is deze wel echt nodig?
						td.innerHTML = obj[prop];
						td.className = prop;
						lastRow.appendChild(td);
					}
					if (prop == 'name' || prop == 'bid') {
						let lastRow = getTable.rows[table.rows.length - 1];
						let td = document.createElement('td'); // is deze wel echt nodig?
						td.innerHTML = obj[prop];
						td.className = prop;
						lastRow.appendChild(td);
					}
					if (prop == 'name' || prop == 'ask') {
						let lastRow = getTable.rows[table.rows.length - 1];
						let td = document.createElement('td'); // is deze wel echt nodig?
						td.innerHTML = obj[prop];
						td.className = prop;
						lastRow.appendChild(td);
					}
					let i = 0;
					let next = i + 1;
					let perRow = 1; // HOW MANY TD PER TR
					if (next % perRow == 0 && next != obj.length) {
						td = tr.insertCell(-1);
						clearEmptyRows();
						iterateObject(obj[prop]);
					}
				}
			}
		};
	}
	buildTableBody();
	/**
	 * @description CLEAR EMPTY ROWS - FUNCTION
	 * @type {function}
	 * */
	function clearEmptyRows() {
		document.querySelectorAll('table tr').forEach(function (e, i) {
			if (e.textContent.trim().length == 0) {
				// if row is empty
				e.parentNode.removeChild(e);
			}
		});
	}
	// btnLive Event function
	const btnLive = document.getElementById('btn-live');
	let btnLiveInt;
	btnLive.addEventListener('click', function () {
		switch (btnLive.value) {
			case 'on':
				// btnLive.removeEventListener('click',btnLive);console.log("OFF - EvenListener Removed");
				btnLiveInt = setInterval(function () {
					buildTableBody();
					console.log('Table data refreshed.');
				}, 3000);
				btnLiveInt;
				console.log('btnLiveInt started');
				btnLive.classList = 'container__button-online';
				btnLive.innerText = 'ONLINE';
				btnLive.value = 'off';
				break;
			case 'off':
				// btnLive.addEventListener('click', function(){
				btnLiveInt = clearInterval(btnLiveInt);
				// console.log("btnLive.addEvent");
				// });
				// btnLive.removeEventListener('click',btnLive);console.log("OFF - EvenListener Removed");
				btnLive.classList = 'container__button-offline';
				btnLive.innerText = 'OFFLINE';
				btnLive.value = 'on';
				break;
			default:
				console.log('btnLive Event default;'); // code
		}
	});
});

module.exports = TradeOgre; // for testing
