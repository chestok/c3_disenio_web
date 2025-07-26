## ¿Qué es HTML y cuál es su función principal en el desarrollo web?

**HTML** (HyperText Markup Language) es el lenguaje de marcado utilizado para crear la estructura de una página web.  
Su función principal es definir la organización del contenido: textos, imágenes, enlaces, formularios, listas, entre otros.

Es el esqueleto de una página web. Los navegadores interpretan el código HTML para mostrar visualmente los elementos al usuario.

### Tres etiquetas básicas y su función:

- `<h1>`: Define un título principal.
- `<p>`: Crea un párrafo de texto.
- `<a>`: Crea un enlace a otra página o sitio web.


## ¿Cuál es la estructura mínima de un documento HTML válido?

Un documento HTML necesita una estructura básica para que los navegadores lo interpreten correctamente. A continuación, un ejemplo:

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Mi primera página</title>
  </head>
  <body>
    <h1>¡Hola, mundo!</h1>
    <p>Este es un párrafo de ejemplo.</p>
  </body>
</html>

¿Qué diferencia hay entre una etiqueta de bloque y una etiqueta en línea (inline)?
Etiqueta de bloque: Ocupa todo el ancho disponible y comienza en una nueva línea.
Se usa para organizar secciones completas del contenido.

Etiqueta en línea (inline): Solo ocupa el espacio necesario y se mantiene en la misma línea que otros elementos.
Se usa para marcar o modificar partes del texto.

Ejemplos de etiquetas de bloque:
<div>

<p>

Ejemplos de etiquetas en línea:
<span>

<a>

¿Qué son los atributos en HTML y para qué se utilizan?
Los atributos son propiedades que se añaden dentro de las etiquetas HTML para aportar información adicional, modificar su comportamiento o definir características específicas (como estilos, enlaces, identificadores, etc.).

Ejemplo utilizando el atributo href:
<a href="https://www.google.com">Ir a Google</a>
Este atributo indica la dirección web a la que apunta el enlace.

Ejemplo utilizando el atributo alt:
<img src="logo.png" alt="Logo de la empresa" />
El atributo alt describe el contenido de la imagen, especialmente útil si la imagen no se carga o para lectores de pantalla.

¿Qué diferencia hay entre las etiquetas <div> y <span> y cuándo deberías usar cada una?
<div> es una etiqueta de bloque que se utiliza para agrupar secciones completas de contenido. Es útil para estructurar y dividir el contenido en áreas.

<span> es una etiqueta en línea usada para marcar partes pequeñas de un texto, generalmente para aplicar estilos específicos o identificar fragmentos dentro de un párrafo.

Ejemplo práctico:
<div class="contenedor">
  <h2>Acerca de mí</h2>
  <p>Mi nombre es <span class="nombre">Sebastián</span> y soy estudiante de programación.</p>
</div>

En este caso, <div> agrupa todo el contenido como un bloque, mientras que <span> destaca solo el nombre dentro del texto.