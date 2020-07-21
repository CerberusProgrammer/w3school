/*El every()método verifica si todos los valores de la matriz pasan una prueba.

Este ejemplo verifica si todos los valores de la matriz son mayores que 18:
*/

var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value) {
    return value > 18;
}