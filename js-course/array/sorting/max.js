var arr = [1, 2, 3, 4, 5, 6, 8, 9]

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}

console.log(myArrayMax(arr));