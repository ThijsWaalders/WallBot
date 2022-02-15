const functions = require('../functions');

test('Adds 2 + 2 to equal 4', () => {
	expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
	expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeUndefined  matches only undefined
// toBeDefined    the opposite of toBeUndefined
// toBeTruthy     matches anything that an if statement treats as true
// toBeFalsy      matches anything that an if statement treats as false

// toBeNull
test('Should be null', () => {
	expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
	expect(functions.checkValue(null)).toBeFalsy();
});

// toBe
test('typeOf should be json file', () => {
	const url = 'json';
	expect(functions.checkValue(url)).toBe('json');
});

test('Should be Array', () => {
	// const arra = ['arra'];
	expect(functions.isArray(Array)).toBe(Array);
});
