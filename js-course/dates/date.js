var d = new Date(2018, 11);
// You cannot omit month. If you

// One and two digit years will be interpreted as 19 xx:

var d = new Date(99, 11, 24);

var d = new Date();
document.getElementById("demo").innerHTML = d.toUTCString();