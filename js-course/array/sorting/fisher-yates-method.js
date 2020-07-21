// Sort the array in random order.

var points = [40, 100, 1, 5, 25, 10];

for (i = points.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = points[i]
    points[i] = points[j]
    points[j] = k
}

console.log(points);