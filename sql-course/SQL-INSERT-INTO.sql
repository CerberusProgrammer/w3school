/*
La instrucción
INSERT INTO se
usa
para
insertar
nuevos registros en una tabla.


*/

INSERT INTO table_name
    (column1, column2, column3, ...)
VALUES
    (value1, value2, value3, ...);

INSERT INTO table_name
VALUES
    (value1, value2, value3, ...);
-- INSERTAR EN Ejemplo

INSERT INTO Customers
    (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES
    ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');

--Insertar datos solo en columnas especificadas

INSERT INTO Customers
    (CustomerName, City, Country)
VALUES
    ('Cardinal', 'Stavanger', 'Norway');