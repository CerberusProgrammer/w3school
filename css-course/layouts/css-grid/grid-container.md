# Contenedor de rejilla
Para que un elemento HTML se comporte como un contenedor de cuadrícula, debe establecer la propiedad de visualización en cuadrícula o cuadrícula en línea .

Los contenedores de cuadrícula consisten en elementos de cuadrícula, colocados dentro de columnas y filas.

# La propiedad grid-template-columnas
La grid-template-columnspropiedad define el número de columnas en su diseño de cuadrícula y puede definir el ancho de cada columna.

El valor es una lista separada por espacios, donde cada valor define el ancho de la columna respectiva.

Si desea que su diseño de cuadrícula contenga 4 columnas, especifique el ancho de las 4 columnas, o "auto" si todas las columnas deben tener el mismo ancho.

# La propiedad grid-template-rows
La grid-template-rowspropiedad define la altura de cada fila.

# La propiedad justify-content
La justify-contentpropiedad se usa para alinear toda la cuadrícula dentro del contenedor.

# La propiedad de alinear contenido
La align-contentpropiedad se utiliza para alinear verticalmente toda la cuadrícula dentro del contenedor.

Nota: La altura total de la cuadrícula debe ser menor que la altura del contenedor para que la propiedad de alinear contenido tenga algún efecto.

# La propiedad de columna de cuadrícula:
La grid-columnpropiedad define en qué columna (s) colocar un elemento.

# La propiedad de fila de cuadrícula:
La grid-rowpropiedad define en qué fila colocar un elemento.

# La propiedad del área de cuadrícula
La grid-areapropiedad se puede usar como una propiedad abreviada para las propiedades grid-row-start, grid-column-start, grid-row-end y las propiedades grid-column-end .

# Nombrar elementos de cuadrícula
La grid-areapropiedad también se puede usar para asignar nombres a elementos de cuadrícula.

Los elementos de cuadrícula nombrados pueden ser referidos por la grid-template-areaspropiedad del contenedor de cuadrícula.