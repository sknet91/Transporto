# TaskManager - Assessment Transporto

Prueba técnica para Transporto, Aplicación para la gestión y control de tareas.

## Demo

Una vista previa de la aplicacion

![image](https://github.com/sknet91/Transporto/assets/11862310/44afbca8-4fd8-4824-9ae4-8219ff3cb806)

## Requerimientos

- Cuando le dé clic a cualquier botón, me debe mostrar una página con un botón que diga “Finalizar tarea #X” (la X depende de la tarea), y cuando le dé clic a ese botón, me debe llevar de nuevo a la página de las 6 tarjetas, escondiendo el botón de la tarjeta que acabo de realizar. (Siguiendo buenas prácticas para el diseño UX cambie mostrar una página por una ventana modal, no dimensioné la posibilidad de que se quisiera revisar react router)

- Obligatoriamente debo comenzar por el paso #1, si le doy clic inicialmente a otra tarea sin haber terminado la #1, me debe salir un mensaje que me recuerde que debo finalizar la tarea #1 primero.

- Si le doy clic a la tarea #3.2 sin haber terminado la #3.1, me debe salir un mensaje que me recuerde que debo finalizar la tarea #3.1 primero.

- Si le doy clic a la tarea #4.1 sin haber terminado la #3.2, me debe salir un mensaje que me recuerde que debo finalizar la tarea #3.2 primero.

- Si le doy clic a la tarea #5.2 sin haber terminado la #5.1, me debe salir un mensaje que me recuerde que debo finalizar la tarea #5.1 primero.

- El resto de tareas se pueden hacer en el orden que se quiera.

### Instalación

- Clonar el repositorio:    git clone https://github.com/sknet91/Transporto

- Moverse a la raíz del proyecto:    cd Transporto

- Instala dependencias:    npm install

### Uso

- Ejecuta la aplicación:    npm start

- Abre la siguiente url:    http://localhost:3000/

Ya puedes utilizar la aplicación, no olvides los requerimientos.
