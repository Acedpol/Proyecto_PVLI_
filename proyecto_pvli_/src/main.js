import game from './game.js';
import bootloader from './bootloader.js';

const config = {
    title: "proyecto_pvli_", //
    version: "0.0.1", //
    type: Phaser.AUTO,
    // ventana del juego
    scale: {
        parent: "container",
        width: 1400,
        height: 800,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#76C9F0", //
    // aspectos del juego
    pixelArt: true,
    input: {
        gamepad: true,
    },
    physics: {
        default: "arcade",
        "arcade": { debug: false } 
    },
    scene: [bootloader, game]
};

new Phaser.Game(config);

// lo que tiene dos barras es añadido
