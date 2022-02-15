// main app.js file
// Global variables
// let headerColThree.innerHTML = "<h1>WallBotv1.5</h1>";
// Select elements
let getBody = document.getElementsByTagName('body')[0];
// document.getElementsByTagName("body")[0].style.overflow = "scroll";
let getTable = document.querySelector('.container__table');
// let getInput = document.querySelector("input");
let getConTable = document.getElementsByClassName('container__table');
let getContainer = document.getElementsByClassName('container');
// Create elements
let container = document.createElement('div');
let header = document.createElement('header');
let conTable = document.createElement('table');
let headerColOne = document.createElement('div');
let headerColTwo = document.createElement('div');
let headerColThree = document.createElement('div');
// Add h1 to header
// header.innerHTML = title;
getBody.appendChild(header);
header.classList = 'header';
// header.appendChild(headerColTwo);

// Create and add header to body
// set classnames and add HTML for header columns 1 2 and 3
headerColOne.classList = 'header__colOne';
headerColOne.innerHTML += '<h1>WallBotv1.5</h1>';
headerColOne.innerHTML += '<h2>TradeOgre</h2>';
headerColTwo.classList = 'header__colTwo';
headerColThree.classList = 'header__colThree';
headerColThree.innerHTML = '';
// add header columns to header;
header.appendChild(headerColOne);
header.appendChild(headerColTwo);
header.appendChild(headerColThree);
// let col2 = document.getElementsByClassName('header__colTwo')
// col2.appendChild(title);

// Create and add main container to body
// Create main container and set classname
getBody.appendChild(container);
container.classList.add('container');
// Create Search/Filter input
let search = document.createElement('input');
// Create search/filter box and add to the container

headerColThree.appendChild(search);
// Add id search-input
search.id = 'search-input';
// Add classlist
search.className = 'form-control';
// Add type
search.type = 'text';
// Add placeholder
search.placeholder = 'Filter coins..';
// Clear search box on load function
function init() {
	// Clear input on load
	getSearchInput.value = '';
}
window.onload = init;
