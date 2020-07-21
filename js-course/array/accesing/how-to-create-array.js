var points = new Array(); // Bad
var points = []; // Good

var points = new Array(40, 100, 1, 5, 25, 10); // Bad
var points = [40, 100, 1, 5, 25, 10]; // Good

var points = new Array(40, 100); // Creates an array with two elements (40 and 100)
var points = new Array(40); // Creates an array with 40 undefined elements !!!!!