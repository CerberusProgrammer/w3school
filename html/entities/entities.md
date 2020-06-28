Los caracteres reservados en HTML deben reemplazarse por entidades de caracteres.

# Entidades HTML

Algunos caracteres están reservados en HTML.

Si usa los signos menor que (<) o mayor que (>) en su texto, el navegador podría mezclarlos con etiquetas.

Las entidades de caracteres se utilizan para mostrar caracteres reservados en HTML.

Una entidad de personaje se ve así:

``` 
&entity_name;
OR

&#entity_number;
Para mostrar un signo menor que (<) debemos escribir: & lt; o & # 60;
```

> Ventaja de usar un nombre de entidad: un nombre de entidad es fácil de recordar. 

> Desventaja de usar un nombre de entidad: los navegadores pueden no admitir todos los nombres de entidades, pero la compatibilidad con los números es buena.

# Espacio irrompible

Una entidad de caracteres común utilizada en HTML es el espacio sin interrupciones: & nbsp; 

Un espacio sin interrupción es un espacio que no se dividirá en una nueva línea.

Dos palabras separadas por un espacio que no se rompe se unirán (no se romperán en una nueva línea). Esto es útil cuando romper las palabras puede ser perjudicial.

Ejemplos:

``` 
§ 10
10 km / h
10 p.m.
```

Otro uso común del espacio sin interrupción es evitar que los navegadores trunquen los espacios en las páginas HTML.

Si escribe 10 espacios en su texto, el navegador eliminará 9 de ellos. Para agregar espacios reales a su texto, puede usar el 

``` 
& nbsp;
```

entidad de personaje.

El guión que no se rompe ( & # 8209; ) le permite usar un carácter de guión (-) que no se rompe.
