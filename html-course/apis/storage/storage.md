# ¿Qué es el almacenamiento web HTML?
Con el almacenamiento web, las aplicaciones web pueden almacenar datos localmente dentro del navegador del usuario.

Antes de HTML5, los datos de la aplicación debían almacenarse en cookies, incluidas en cada solicitud del servidor. El almacenamiento web es más seguro y se pueden almacenar grandes cantidades de datos localmente, sin afectar el rendimiento del sitio web.

A diferencia de las cookies, el límite de almacenamiento es mucho mayor (al menos 5 MB) y la información nunca se transfiere al servidor.

El almacenamiento web es por origen (por dominio y protocolo). Todas las páginas, de un origen, pueden almacenar y acceder a los mismos datos.

# Objetos de almacenamiento web HTML

El almacenamiento web HTML proporciona dos objetos para almacenar datos en el cliente:

* window.localStorage - almacena datos sin fecha de vencimiento
* window.sessionStorage - almacena datos para una sesión (los datos se pierden cuando se cierra la pestaña del navegador)

Antes de usar el almacenamiento web, verifique el soporte del navegador para localStorage y sessionStorage:

``` javascript
if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
} else {
    // Sorry! No Web Storage support..
}
```
