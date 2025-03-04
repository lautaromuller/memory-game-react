# Memory Game

Este es un juego de Memotest desarrollado con React y TypeScript.

## 🚀 Tecnologías utilizadas

 - React
 
- TypeScript

- Vite (para el entorno de desarrollo)

- CSS (para los estilos)

## 📌 Funcionalidades

- Dos jugadores pueden turnarse para encontrar pares de cartas iguales.

- Se lleva un registro de los puntajes de cada jugador.

- Las cartas seleccionadas se comparan y permanecen visibles si coinciden.

- Un sistema de turnos alterna entre los jugadores.

## 📂 Estructura del proyecto

    /src
      ├── components
      │   ├── Card.tsx  # Componente de carta
      │   └── Player.tsx # Componente de jugador
      ├── hooks
      │   └── useGameLogic.ts  # Lógica del juego
      ├── types
      │   └── types.ts  # Definiciones de tipos
      ├── utils
      │   └── utils.ts  # Datos de las cartas
      ├── App.tsx  # Componente principal
      ├── main.tsx  # Punto de entrada
      ├── App.css  # Estilos del juego

## 🛠 Instalación y ejecución

 1. Clona el repositorio:

    git clone https://github.com/tu_usuario/memotest-game.git
    cd memotest-game

 2. Instala las dependencias:

    npm install

3. Inicia el servidor de desarrollo:

    npm run dev

## 📖 Cómo jugar

1. El jugador 1 selecciona una carta.

2. Luego selecciona otra carta.

3. Si las cartas coinciden, el jugador gana un punto y sigue jugando.

4. Si no coinciden, el turno pasa al siguiente jugador.

5. El juego continúa hasta que todas las cartas sean emparejadas.

## 📝 Autor

**Lautaro Muller**
