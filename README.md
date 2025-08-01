##Descripción del desafío

Este proyecto es un clon funcional de WhatsApp Web realizado como trabajo final del curso de Frontend de la UTN Buenos Aires (e-learning). El objetivo fue replicar la experiencia de uso de la app original, desarrollando funcionalidades de mensajería entre contactos sin usar estado global ni contextos (ya que todavía no los incorporé a mi proceso de aprendizaje) , y estilizando los componentes para lograr un diseño visual similar. 



##Librerías utilizadas
React Router DOM: para navegación entre contactos y pantallas.

React: como librería principal para la construcción de componentes.

CSS: para estilos modulares por componente, replicando el diseño de WhatsApp Web.

##Dificultades presentadas

Una de las principales dificultades estuvo relacionada con la implementación del diseño responsive para dispositivos móviles. El objetivo era lograr que, en pantallas pequeñas, solo se mostrara la lista de contactos si no había uno seleccionado, y que desapareciera por completo la pantalla de inicio (imagen, textos y botón de descarga).

Inicialmente, la pantalla de inicio se ocultaba solo parcialmente, quedando un espacio vacío visible en resoluciones menores a 480px. Luego de revisar la lógica condicional en el componente Main y ajustar las media queries en el archivo layout.css, se resolvió el problema controlando explícitamente el renderizado del div del chat en base al ancho de pantalla y al contacto seleccionado.