import Bootloader from './Bootloader.js';

const config = {
    title: "proyecto_pvli_",
    version: "0.0.1",
    type: Phaser.WEBGL,
    scale: {
        parent: "container",
        width: 600,
        height: 400,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#76C9F0",
    pixelArt: true,
    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 500
            }
        }
    },
    scene: [
        Bootloader
    ]
};

new Phaser.Game(config);