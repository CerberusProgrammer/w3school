/*
Un campo con un valor NULL es un campo sin valor.

Si un campo en una tabla es opcional, es posible insertar un nuevo registro
 o actualizar un registro 
sin agregar un valor a este campo. Luego, el campo se guardará con un valor NULL.

No es posible
probar valores NULL con operadores de comparación, como =, <o <>.

Tendremos que usar los operadores IS NULL y IS NOT NULL en su lugar.
*/

SELECT column_names
FROM table_name
WHERE column_name IS NULL;

SELECT column_names
FROM table_name
WHERE column_name IS NOT NULL;

SELECT CustomerName, ContactName, Address
FROM Customers
WHERE Address IS NULL;

SELECT CustomerName, ContactName, Address
FROM Customers
WHERE Address IS NOT NULL;