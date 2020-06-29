# El elemento `<form>` 
El `<form>` elemento HTML define un formulario que se utiliza para recopilar la entrada del usuario:

``` html
<form>
    .
    form elements
    .
</form>
Un formulario HTML contiene elementos de formulario .
```

Los elementos de formulario son diferentes tipos de elementos de entrada, como: campos de texto, casillas de verificación, botones de opción, botones de envío y más.

# El elemento `<input>` 

El `<input>` elemento es el elemento de forma más importante.

El `<input>` elemento se muestra de varias maneras, según el atributo de tipo .

# El atributo de acción

El actiona tributo define la acción a realizar cuando se envía el formulario.

Por lo general, los datos del formulario se envían a una página en el servidor cuando el usuario hace clic en el botón enviar.

En el ejemplo anterior, los datos del formulario se envían a una página en el servidor llamada "/action_page.php". Esta página contiene un script del lado del servidor que maneja los datos del formulario:

``` html
<form action="/action_page.php">
```

Si actionse omite el atributo, la acción se establece en la página actual.

# El atributo de destino

El targetatributo especifica si el resultado enviado se abrirá en una nueva pestaña del navegador, un marco o en la ventana actual.

El valor predeterminado es " _self", lo que significa que el formulario se enviará en la ventana actual.

Para que el resultado del formulario se abra en una nueva pestaña del navegador, use el valor " _blank".

Ejemplo
Aquí, el resultado enviado se abrirá en una nueva pestaña del navegador:

``` html
<form action="/action_page.php" target="_blank">
```
