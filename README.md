# Actividad 5 - Recomendador de Películas con React

Este proyecto es una mini aplicación interactiva creada utilizando **React** y compilada dinámicamente con "Vite". La aplicación permite visualizar una lista de películas, interactuar con ellas a través de un sistema de "Likes" en tiempo real y está completamente estructurada utilizando componentes reutilizables, control de estados y propiedades.

Cuestionario Técnico de la Actividad

 ¿Qué diferencia hay entre props y state en React?
Props (Properties): Son datos que un componente padre le pasa a un componente hijo. Son "inmutables" (de solo lectura), lo que significa que el componente hijo no puede modificarlos directamente; solo los recibe para usarlos o pintarlos en pantalla.
State (Estado): Es la memoria interna de un componente. Es "mutable" y permite que el componente almacene datos que pueden cambiar con el tiempo (por ejemplo, debido a clics o formularios). Cada vez que el estado cambia, el componente se vuelve a renderizar automáticamente para mostrar los nuevos datos en pantalla.

 ¿Por qué es importante usar una key al renderizar una lista de elementos?
La propiedad `key` funciona como un identificador único para cada elemento de una lista en React. Es fundamental porque ayuda al algoritmo de React a saber exactamente "qué elementos han cambiado, se han agregado o se han eliminado". Sin las `key`, React tendría que volver a renderizar toda la lista completa desde cero cada vez que haya una modificación, lo cual afecta gravemente al rendimiento de la aplicación.

 Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.
`useState` es un Hook de React que sirve para "crear variables con memoria" dentro de un componente. Nos devuelve dos cosas: la variable con el valor actual y una función especial para poder actualizar ese valor. 
"Ejemplo en el proyecto:" Lo utilizamos para controlar el contador de "Likes" de cada película. Cuando el usuario hace clic en el botón de votar, se llama a la función de actualización de `useState`, incrementando el número en 1 y haciendo que el nuevo total se refleje inmediatamente en la interfaz.