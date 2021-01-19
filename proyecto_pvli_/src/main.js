import bootloader from './bootloader.js';
import game from './game.js';
import menu from './menu.js';
import menuprincipal from './menuprincipal.js';
import endscene from './endscene.js';

const config = {
    title: "proyecto_pvli_", //
    version: "0.0.1", //
    type: Phaser.AUTO,
    // ventana del juego
    scale: {
        parent: "container",
        width: 1280,
        height: 720,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    backgroundColor: "#000000", //
    // aspectos del juego
    pixelArt: true,
    input: {
        gamepad: true,
    },
    physics: {
       
          /*default:"arcade",
          //default:"matter"
            arcade: {
                //gravity: { y: 200 }
                debug: true,
            },
            //default:"matter",
            matter: {
                gravity: { y: 0.5 },
                debug:true,
            },*/
        
      
    },
    scene: [bootloader, menuprincipal, menu, game, endscene]
};

new Phaser.Game(config);

// lo que tiene dos barras es añadido