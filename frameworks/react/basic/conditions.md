# Un elemento de nivel superior
El código HTML debe estar envuelto en UN elemento de nivel superior.

Entonces, si desea escribir dos encabezados, debe colocarlos dentro de un elemento principal, como un divelemento

'''javascript
const myelement = (
  <div>
    <h1>I am a Header.</h1>
    <h1>I am a Header too.</h1>
  </div>
);
'''

# Crear un componente de clase
Al crear un componente React, el nombre del componente debe comenzar con una letra mayúscula.

El componente tiene que incluir la extends React.Componentdeclaración, esta declaración crea una herencia para React.Component y le da acceso a su componente a las funciones de React.Component.

El componente también requiere un render()método, este método devuelve HTML.

# Crear un componente de función
Aquí está el mismo ejemplo que el anterior, pero creado usando un componente Function en su lugar.

Un componente de Función también devuelve HTML, y se comporta de la misma manera que un componente de Clase, pero los componentes de Clase tienen algunas adiciones, y serán preferidos en este tutorial.

# Constructor de componentes
Si hay una constructor()función en su componente, se llamará a esta función cuando se inicie el componente.

La función constructora es donde inicia las propiedades del componente.

En React, las propiedades de los componentes deben mantenerse en un objeto llamado state.

Aprenderá más sobre más stateadelante en este tutorial.

La función de constructor también es donde se honra la herencia del componente primario al incluir la super() instrucción, que ejecuta la función de constructor del componente primario, y su componente tiene acceso a todas las funciones del componente primario ( React.Component).

# Accesorios
Otra forma de manejar las propiedades de los componentes es mediante el uso props.

Los accesorios son como argumentos de función, y los envía al componente como atributos.

Aprenderá más sobre esto propsen el próximo capítulo.