var arr = [1, 2, 3, 4, 5, 6, 7]

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}

console.log(myArrayMin(arr));