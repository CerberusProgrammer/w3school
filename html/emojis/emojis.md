# ¿Qué son los emojis?
Los emojis parecen imágenes o iconos, pero no lo son.

Son letras (caracteres) del alfabeto UTF-8 (Unicode).

UTF-8 cubre casi todos los personajes y símbolos del mundo.

# El atributo de juego de caracteres HTML

Para mostrar una página HTML correctamente, un navegador web debe conocer el conjunto de caracteres utilizado en la página.

Esto se especifica en la <meta>etiqueta:

``` html
<meta charset="UTF-8">
```

# Personajes UTF-8

Muchos caracteres UTF-8 no se pueden escribir en un teclado, pero siempre se pueden mostrar usando números (llamados números de entidad):

A es 65
B es 66
C es 67
Ejemplo

``` html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
</head>

<body>

    <p>I will display A B C</p>
    <p>I will display &#65; &#66; &#67;</p>

</body>

</html>
```

Emoji Reference:
https://www.w3schools.com/charsets/ref_emoji.asp
