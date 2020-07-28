/*
La palabra clave ORDER BY se usa para ordenar el conjunto de 
resultados en orden ascendente o descendente.

La palabra clave ORDER BY ordena los registros en orden ascendente 
de forma predeterminada. Para ordenar
los registros en orden descendente, use la palabra clave DESC.
*/

SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC
|DESC;

SELECT *
FROM Customers
ORDER BY Country;

SELECT *
FROM Customers
ORDER BY Country DESC;


/*
La siguiente instrucción
SQL selecciona a todos los 
clientes de la tabla "Clientes",
ordenados por la columna "País" y
"CustomerName". Esto significa que
ordena por País, pero si algunas
filas tienen el mismo País, los ordena por
CustomerName:
*/

SELECT *
FROM Customers
ORDER BY Country, CustomerName;