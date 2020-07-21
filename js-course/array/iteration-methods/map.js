/* 
Array.map ()
El map()método crea una nueva matriz al realizar una función en cada elemento de la matriz.

El map()método no ejecuta la función para elementos de matriz sin valores.

El map()método no cambia la matriz original.

Este ejemplo multiplica cada valor de matriz por 2:
*/

var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value) {
    return value * 2;
}

console.log(numbers2);