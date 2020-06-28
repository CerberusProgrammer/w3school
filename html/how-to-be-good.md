# Sé inteligente y prueba de futuro
Aquí hay algunas pautas y consejos para crear un buen código fuente HTML.

# Usar el tipo de documento correcto

Siempre declare el tipo de documento como la primera línea de su documento.

El tipo de documento correcto para HTML es:

``` html
<!DOCTYPE html>
```

# Usar nombres de elementos en minúscula

HTML permite mezclar letras mayúsculas y minúsculas en los nombres de los elementos.

Sin embargo, recomendamos usar nombres de elementos en minúsculas, porque:

* Mezclar nombres en mayúsculas y minúsculas se ve mal
* Los desarrolladores normalmente usan nombres en minúsculas
* Minúscula se ve más limpia
* Minúscula es más fácil de escribir

Bueno:

``` html
<body>
    <p>This is a paragraph</p>
</body>
```

Malo:

``` html
<BODY>
    <P>This is a paragraph</P>
</BODY>
```

# Cerrar todos los elementos HTML

En HTML, no tiene que cerrar todos los elementos (por ejemplo, el <p>elemento).

Sin embargo, recomendamos cerrar todos los elementos HTML, como este:

Bueno:

``` html
<section>
    <p>This is a paragraph.</p>
    <p>This is a paragraph.</p>
</section>
```

Malo:

``` html
<section>
    <p>This is a paragraph.
    <p>This is a paragraph.
</section>
```

# Usar nombres de atributo en minúsculas

HTML permite mezclar letras mayúsculas y minúsculas en los nombres de los atributos.

Sin embargo, recomendamos usar nombres de atributos en minúsculas, porque:

Mezclar nombres en mayúsculas y minúsculas se ve mal
Los desarrolladores normalmente usan nombres en minúsculas
Mirada minúscula más limpia
Las minúsculas son más fáciles de escribir.

Bueno:

``` html
<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>
```

Malo:

``` html
<a HREF="https://www.w3schools.com/html/">Visit our HTML tutorial</a>
```

# Citar siempre los valores de los atributos

HTML permite valores de atributos sin comillas.

Sin embargo, recomendamos citar valores de atributos, porque:

Los desarrolladores normalmente citan valores de atributos
Los valores citados son más fáciles de leer.
DEBE usar comillas si el valor contiene espacios

Bueno:

``` html
<table class="striped">
```

Malo:

``` html
<table class=striped>
```

Muy mal:

``` html
Esto no funcionará, porque el valor contiene espacios:
<table class=table striped>
```

# Especifique siempre alt, ancho y alto para imágenes

Siempre especifique el altatributo para las imágenes. Este atributo es importante si la imagen por alguna razón no se puede mostrar.

Además, siempre defina el ancho y el alto de las imágenes. Esto reduce el parpadeo, porque el navegador puede reservar espacio para la imagen antes de cargarla.

Bueno:

``` html
<img src="html5.gif" alt="HTML5" style="width:128px; height:128px">
```

Malo:

``` html
<img src="html5.gif">
```

# Espacios y signos iguales

HTML permite espacios alrededor de signos iguales. Pero sin espacio es más fácil de leer y agrupa mejor las entidades.

Bueno:

``` html
<link rel="stylesheet" href="styles.css">
```

Malo:

``` html
<link rel="stylesheet" href="styles.css">
```

# Evitar largas líneas de código

Cuando se utiliza un editor HTML, NO es conveniente desplazarse hacia la derecha y hacia la izquierda para leer el código HTML.

Intenta evitar líneas de código demasiado largas.

# Líneas en blanco e indentación

No agregue líneas en blanco, espacios o hendiduras sin una razón.

Para facilitar la lectura, agregue líneas en blanco para separar bloques de código grandes o lógicos.

Para facilitar la lectura, agregue dos espacios de sangría. No use la tecla de tabulación.

Bueno:

``` html
<body>

    <h1>Famous Cities</h1>

    <h2>Tokyo</h2>
    <p>Tokyo is the capital of Japan, the center of the Greater Tokyo Area,
        and the most populous metropolitan area in the world.
        It is the seat of the Japanese government and the Imperial Palace,
        and the home of the Japanese Imperial Family.</p>

</body>
```

Malo:

``` html
<body>

    <h1>Famous Cities</h1>

    <h2>Tokyo</h2>

    <p>
        Tokyo is the capital of Japan, the center of the Greater Tokyo Area,
        and the most populous metropolitan area in the world.
        It is the seat of the Japanese government and the Imperial Palace,
        and the home of the Japanese Imperial Family.
    </p>

</body>
```

Buen ejemplo de mesa:

``` html
<table>
    <tr>
        <th>Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>A</td>
        <td>Description of A</td>
    </tr>
    <tr>
        <td>B</td>
        <td>Description of B</td>
    </tr>
</table>
```

Buena lista de ejemplo:

``` html
<ul>
    <li>London</li>
    <li>Paris</li>
    <li>Tokyo</li>
</ul>
```

# Nunca omita el elemento `<title>` 

El `<title>` elemento es obligatorio en HTML.

¡El contenido del título de una página es muy importante para la optimización de motores de búsqueda (SEO)! Los algoritmos de los motores de búsqueda utilizan el título de la página para decidir el orden cuando se enumeran las páginas en los resultados de búsqueda.

El `<title>` elemento:

* define un título en la barra de herramientas del navegador
* proporciona un título para la página cuando se agrega a favoritos
* muestra un título para la página en los resultados del motor de búsqueda

Por lo tanto, trate de hacer que el título sea lo más preciso y significativo posible: 

```html 
<title>HTML Style Guide and Coding Conventions</title>

``` 

# ¿Omitiendo `<html>` y `<body>` ?
Una página HTML se validará sin las etiquetas <html>y <body>:

Ejemplo
```html
<!DOCTYPE html>
<head>
  <title>Page Title</title>
</head>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>
```

Sin embargo, recomendamos agregar siempre las etiquetas `<html>` y `<body>` .

El `<html>` elemento es la raíz del documento y el lugar recomendado para especificar el idioma de la página. Declarar el idioma de la página es importante para las aplicaciones de accesibilidad (lectores de pantalla) y los motores de búsqueda.

Omitir `<body>` puede producir errores en navegadores antiguos.

Omitir `<html>` y `<body>` también puede bloquear el software DOM y XML.

Ejemplo

``` html
<!DOCTYPE html>
<html lang="en-us">

<head>
    <title>Page Title</title>
</head>

<body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>

</body>

</html>
```

# Metadatos

Para garantizar una interpretación adecuada y una correcta indexación del motor de búsqueda, tanto el idioma como la codificación de caracteres deben definirse lo antes posible en un documento HTML:

``` html
<!DOCTYPE html>
<html lang="en-us">

<head>
    <meta charset="UTF-8">
    <title>Page Title</title>
</head>
```

# Configuración de la ventana gráfica

La ventana gráfica es el área visible del usuario de una página web. Varía según el dispositivo: será más pequeño en un teléfono móvil que en la pantalla de una computadora.

Debe incluir el siguiente `<meta>` elemento en todas sus páginas web:

`<meta name="viewport" content="width=device-width, initial-scale=1.0">` 

Esto le da al navegador instrucciones sobre cómo controlar las dimensiones y la escala de la página.

La parte ancho = ancho del dispositivo establece el ancho de la página para seguir el ancho de la pantalla del dispositivo (que variará según el dispositivo).

La parte initial-scale = 1.0 establece el nivel de zoom inicial cuando el navegador carga por primera vez la página.

# Utilice nombres de archivo en minúsculas

Algunos servidores web (Apache, Unix) distinguen entre mayúsculas y minúsculas sobre los nombres de archivo: no se puede acceder a "london.jpg" como "London.jpg".

Otros servidores web (Microsoft, IIS) no distinguen entre mayúsculas y minúsculas: se puede acceder a "london.jpg" como "London.jpg".

Si usa una combinación de mayúsculas y minúsculas, debe tener esto en cuenta.

Si pasa de un servidor que no distingue mayúsculas de minúsculas a un servidor que distingue mayúsculas y minúsculas, ¡incluso los pequeños errores romperán su web!

Para evitar estos problemas, ¡use siempre nombres de archivo en minúsculas!

# Extensiones de archivo

Los archivos HTML deben tener una extensión .html o .htm .

Los archivos CSS deben tener una extensión .css .

Los archivos JavaScript deben tener una extensión .js .

# ¿Diferencias entre .htm y .html?

¡No hay diferencia entre las extensiones de archivo .htm y .html!

Ambos serán tratados como HTML por cualquier navegador web y servidor web.

# Nombres de archivo predeterminados

Cuando una URL no especifica un nombre de archivo al final (como "https://www.w3schools.com/"), el servidor simplemente agrega un nombre de archivo predeterminado, como "index.html", "index.htm", " default.html "o" default.htm ".

Si su servidor está configurado solo con "index.html" como nombre de archivo predeterminado, su archivo debe llamarse "index.html" y no "default.html".

Sin embargo, los servidores se pueden configurar con más de un nombre de archivo predeterminado, y normalmente puede configurar tantos nombres de archivo predeterminados como sea necesario.
