import bootloader from './bootloader.js';
import game from './game.js';

const config = {
    title: "proyecto_pvli_", //
    version: "0.0.1", //
    type: Phaser.AUTO,
    // ventana del juego
    scale: {
        parent: "container",
        width: 1280,
        height: 720,
        mode: Phaser.Scale.ENVELOP,
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    backgroundColor: "#000000", //
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