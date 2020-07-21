/* 

El filter()método crea una nueva matriz con elementos de matriz que pasa una prueba.

Este ejemplo crea una nueva matriz a partir de elementos con un valor mayor que 18:

*/
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value) {
    return value > 18;
}

console.log(over18);