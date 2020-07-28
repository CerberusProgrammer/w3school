# ¿Qué es la ventana gráfica?
La ventana gráfica es el área visible del usuario de una página web.

La ventana gráfica varía con el dispositivo y será más pequeña en un teléfono móvil que en la pantalla de una computadora.

Antes de las tabletas y los teléfonos móviles, las páginas web se diseñaron solo para pantallas de computadora, y era común que las páginas web tuvieran un diseño estático y un tamaño fijo.

Luego, cuando comenzamos a navegar por Internet con tabletas y teléfonos móviles, las páginas web de tamaño fijo eran demasiado grandes para la ventana gráfica. Para solucionar esto, los navegadores en esos dispositivos redujeron la página web para que se ajustara a la pantalla.

¡Esto no fue perfecto! Pero una solución rápida.

# Configuración de la ventana gráfica
HTML5 introdujo un método para permitir a los diseñadores web tomar el control de la ventana gráfica, a través de la <meta>etiqueta.

Debe incluir el siguiente <meta>elemento de ventana gráfica en todas sus páginas web:

<meta name="viewport" content="width=device-width, initial-scale=1.0">
Esto le da al navegador instrucciones sobre cómo controlar las dimensiones y la escala de la página.

La width=device-widthparte establece el ancho de la página para seguir el ancho de pantalla del dispositivo (que variará según el dispositivo).

La initial-scale=1.0parte establece el nivel de zoom inicial cuando el navegador carga por primera vez la página.

Aquí hay un ejemplo de una página web sin la metaetiqueta de la vista, y la misma página web con la metaetiqueta de la vista:

# Tamaño del contenido a la ventana gráfica
Los usuarios están acostumbrados a desplazarse verticalmente por sitios web tanto en dispositivos móviles como de escritorio, ¡pero no horizontalmente!

Por lo tanto, si el usuario se ve obligado a desplazarse horizontalmente, o alejarse, para ver toda la página web, resulta en una experiencia de usuario deficiente.

Algunas reglas adicionales a seguir:

1. NO utilice elementos grandes de ancho fijo: por ejemplo, si una imagen se muestra con un ancho más ancho que la vista, puede hacer que la vista se desplace horizontalmente. Recuerde ajustar este contenido para que se ajuste al ancho de la ventana gráfica.

2. NO permita que el contenido se base en un ancho de ventana gráfica particular para renderizar bien : dado que las dimensiones de la pantalla y el ancho en píxeles CSS varían ampliamente entre dispositivos, el contenido no debe depender de un ancho de ventana gráfica particular para renderizar bien.

3. Use consultas de medios CSS para aplicar diferentes estilos para pantallas pequeñas y grandes : establecer anchos CSS absolutos grandes para los elementos de la página hará que el elemento sea demasiado ancho para la ventana gráfica en un dispositivo más pequeño. En su lugar, considere usar valores de ancho relativo, como ancho: 100%. Además, tenga cuidado de utilizar grandes valores de posicionamiento absoluto. Puede hacer que el elemento caiga fuera de la ventana gráfica en dispositivos pequeños.

