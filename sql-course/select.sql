
/*
La instrucción
SELECT se usa
para seleccionar datos de una base de datos.

Los datos devueltos se almacenan en una tabla de resultados,
llamada conjunto de resultados.
*/

SELECT column1, column2, ...
FROM table_name;
/*
Aquí, column1, column2, ... 
son los nombres de campo de la 
tabla de la que desea seleccionar
datos. Si desea seleccionar todos los
campos disponibles en la tabla,
use la siguiente sintaxis:
*/
SELECT CustomerName, City
FROM Customers;

SELECT *
FROM Customers;
