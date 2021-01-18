import player from './player.js';
import health from './health.js';
import pausemenu from './pausemenu.js';
import enemy from './enemy.js';
import item from './item.js';
import key from './key.js';
import batery from './batery.js';
import zone from './zone.js'
import healthitem from './healingitem.js';

export default class game extends Phaser.Scene {
    constructor(scenekey) {
        super({ key: scenekey, physics:{
            arcade: { debug:true, },
            matter:{debug:true,gravity:1},
        } });
    }
    
    create() {
        // Grupos y vida
        this.enemies = this.physics.add.group({key: 'enemy', frameQuantity: 0});
        this.objects = this.physics.add.group({key: 'items', frameQuantity: 1});
        this.live = new health( this, 320, 190, "live" ).setDepth(3);

        // Vista o punto de vista: cámara
        this.cameras.main.zoom = 2;
        this.cameras.main.fadeIn(1250);
        
        // inicialización menu pause: libro
        this.pausemenu  = new pausemenu(this, this.player.x, this.player.y, "libro");

        // // inventario
        this.contadorLlaves = 0;
        this.contadorPilas = 0;
        // tecla de salida
        this.input.keyboard.addKey('ESC').on('down', event => { this.pause() });
    }

    pause() {
        this.pausemenu.openBook();
        this.player.pausePlayer();
        for(var i; i < this.enemies.getLength(); i++){
        this.enemies.getChildren()[i].pauseEnemy();
        }
        //this.enemy.pauseEnemy();
    }

    createMap(layer1, layer2, layer3, keyMap, tileMap, tileZone) {
        // creación del mapa:
        this.map = this.make.tilemap({ 
            key: keyMap, 
            tileWidth: 16, 
            tileHeight: 16 
        });
        // creación de layers:
        const tileset = this.map.addTilesetImage('TileSetCaminos', tileMap);
        const tileset2 = this.map.addTilesetImage('Ambiente', tileZone);
        this.groundLayer = this.map.createStaticLayer(layer1, [tileset]).setDepth(-2);
        this.immovableLayer = this.map.createStaticLayer(layer2, [tileset2]).setDepth(2);
        this.backLayer = this.map.createStaticLayer(layer3, [tileset2]).setDepth(-1);    
        // // definición de colisiones:
        this.groundLayer.setCollisionByProperty({collider : true}); // -> con propiedad en el editor
        this.immovableLayer.setCollisionByProperty({collider : true}); // -> con propiedad en el editor
        this.backLayer.setCollisionByProperty({collider : true});
    }

    // render / debug de las colisiones en el mapa
    debugCollisionsMapa() {
        this.immovableLayer.renderDebug(this.add.graphics().setAlpha(0.60));
        this.groundLayer.renderDebug(this.add.graphics().setAlpha(0.60));
        this.backLayer.renderDebug(this.add.graphics().setAlpha(0.60));
    }

    quitaVida() {
        if(!this.player.pause) {
            this.player.health = this.player.health - 1;
            console.log(this.player.health);
        }
    }

}