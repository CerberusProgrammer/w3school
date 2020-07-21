/*
El reduceRight()método ejecuta una función en cada elemento de la matriz
para producir (reducirlo) un solo valor.

Los reduceRight()trabajos de derecha a izquierda en la matriz. 
Este ejemplo encuentra la suma de todos los números en una matriz:
*/

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction);

function myFunction(total, value) {
    return total + value;
}