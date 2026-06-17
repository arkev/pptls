# PPTLS (Piedra, Papel, Tijera, Lagarto, Spock) 🖖

Un divertido videojuego web basado en el clásico juego extendido popularizado por Sheldon Cooper en la serie *The Big Bang Theory*.

## 📖 Sobre el Proyecto

Este proyecto es una aplicación web interactiva donde puedes jugar contra la máquina ("Sheldon") al famoso juego de **Piedra, Papel, Tijera, Lagarto, Spock**.

### Las Reglas

Tal como las explicó Sheldon:
> "Las tijeras cortan el papel, el papel cubre a la piedra, la piedra aplasta al lagarto, el lagarto envenena a Spock, Spock destroza las tijeras, las tijeras decapitan al lagarto, el lagarto se come el papel, el papel refuta a Spock, Spock vaporiza la piedra, y, como es habitual… la piedra aplasta las tijeras."

## ✨ Características

- **Personalización de Partida:** 
  - Ingresa tu propio *Nickname* antes de jugar.
  - Configura la cantidad de victorias necesarias para ganar la partida.
- **Efectos y UI:** Pantalla de presentación (Splash screen), modales animados para configuraciones y resultados.
- **Progreso en Vivo:** Marcador que muestra la puntuación actual entre el Usuario y la Máquina (Sheldon).
- **Diseño Responsivo:** Adaptado para diferentes resoluciones. Incluye una alerta para girar el dispositivo cuando se visualiza en modo horizontal (landscape) en pantallas pequeñas.

## 🚀 Cómo Jugar

No necesitas instalar dependencias pesadas ni servidores. Funciona directamente en tu navegador:

1. Clona este repositorio o descarga los archivos.
2. Abre el archivo `index.html` en cualquier navegador web moderno (Chrome, Firefox, Safari, Edge, etc.).
3. Ingresa tu nombre, elige cuántas victorias se necesitan para ganar y haz clic en "Iniciar".
4. Selecciona tu movimiento (Piedra, Papel, Tijera, Lagarto o Spock) haciendo clic en los iconos inferiores.

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Estructura semántica de la aplicación.
- **CSS3:** Estilos, animaciones (`normalize.css` incluido).
- **JavaScript (Vanilla):** Lógica del juego, manejo del DOM y variables de estado (incluye `localStorage` para el manejo de la pantalla de inicio).
- Librerías externas de interfaz como *Nifty Modal Window Effects* para los cuadros de diálogo.

## 📁 Estructura del Proyecto

```text
/
├── css/             # Hojas de estilo de la aplicación
├── images/          # Recursos gráficos (iconos de las manos, logo de Spock, etc.)
├── js/              # Archivos de lógica y librerías externas minificadas
├── index.html       # Archivo principal de la aplicación
└── README.md        # Documentación del proyecto
```

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar el código, añadir sonidos o nuevas características:
1. Haz un *Fork* del repositorio.
2. Crea una rama para tu nueva característica (`git checkout -b feature/nueva-caracteristica`).
3. Haz un *Commit* de tus cambios (`git commit -m 'Añade nueva característica'`).
4. Haz un *Push* a la rama (`git push origin feature/nueva-caracteristica`).
5. Abre un *Pull Request*.
