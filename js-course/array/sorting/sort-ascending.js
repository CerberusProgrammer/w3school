var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) { return a - b });
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value