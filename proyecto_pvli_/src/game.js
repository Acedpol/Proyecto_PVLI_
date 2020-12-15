import player from './player.js';
import health from './health.js';
import pausemenu from './pausemenu.js';
import enemy from './enemy.js';

export default class game extends Phaser.Scene {
  constructor() {
    super({ key: "game" });
  }
  preload() {}

  create() {
    this.createMap("Superficie", "Muebles", 'Hogar', 'tilemap');
    this.player = new player(this, 300, 200, "player");
    
    this.enemy=new enemy(this,400,150,"player");
    this.cameras.main.startFollow(this.player);
    this.physics.add.collider(this.player,this.enemy);
    this.pausemenu  = new pausemenu(this, this.player.x, this.player.y, "libro")
    this.pausemenu.scale = 0.8;
    this.live = new health(this,0,25,"live");

    // this.cameras.main.zoom = 2; 
    // agregado de colisiones del mapa al jugador:
    this.physics.add.collider(this.player, this.groundLayer);
    this.physics.add.collider(this.player, this.immovableLayer); 
    // this.debugCollisionsMapa();

    this.input.keyboard.addKey('ESC').on('down', event => { this.pause() });
  }

  update(time, delta) {
    
    console.log(this.player.health);
  }

  pause(){
    this.pausemenu.openBook();
    this.player.pausePlayer();
    this.enemy.pauseEnemy();
  }

  createMap(layer1, layer2, keyMap, tileMap){
    // creación del mapa:
    this.map = this.make.tilemap({ 
      key: keyMap, 
      tileWidth: 16, 
      tileHeight: 16 
    });
    // creación de layers:
    const tileset = this.map.addTilesetImage('tileset', tileMap);
    this.groundLayer = this.map.createStaticLayer(layer1, [tileset]).setDepth(-1);
    this.immovableLayer = this.map.createStaticLayer(layer2, [tileset]);    
    // definición de colisiones:
    this.groundLayer.setCollisionByProperty({collider : true}); // -> con propiedad en el editor
    this.immovableLayer.setCollisionByProperty({collider : true});
    // ----------- this.immovableLayer.setCollisionBetween(1, 999, true); -> con indices    
  }

  // render / debug de las colisiones en el mapa
  debugCollisionsMapa() {
    this.immovableLayer.renderDebug(this.add.graphics().setAlpha(0.60));
    this.groundLayer.renderDebug(this.add.graphics().setAlpha(0.60));
  }
}
