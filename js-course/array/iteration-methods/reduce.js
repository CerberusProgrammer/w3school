/*
El reduce()método ejecuta una función en cada elemento de la matriz para producir 
(reducirlo) un solo valor.

El reduce()método funciona de izquierda a derecha en la matriz. Ver también reduceRight().

Este ejemplo encuentra la suma de todos los números en una matriz:
*/

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value) {
    return total + value;
}

console.log(sum);

// El reduce() método puede aceptar un valor inicial:

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction, 100);

function myFunction(total, value) {
    return total + value;
}

console.log(sum);