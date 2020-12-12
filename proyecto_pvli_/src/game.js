import player from './player.js';
import health from './health.js';
//import pausemenu from './pausemenu.js';

export default class game extends Phaser.Scene {
  constructor() {
    super({ key: "game" });
  }
  preload() {}

  create() {
    this.createMap("Superficie", "Muebles", 'Hogar', 'tilemap');
    this.player = new player(this, 300, 200, "player");
    this.live = new health(this,0,25,"live");
    this.cameras.main.startFollow(this.player);
    this.cameras.main.zoom = 2;
    this.physics.add.collider(this.player, this.groundLayer);
    this.physics.add.collider(this.player, this.immovableLayer);
    this.immovableLayer.renderDebug(this.add.graphics());
    //this.pausemenu  = new pausemenu(this, this.player.x, this.player.y, "libro")
    //this.pausemenu.scale = 0.8;
    

    this.input.keyboard.addKey('ESC').on('down', event => { this.pause() });

    
  }

  update(time, delta) {
    
  }

  pause(){
    this.pausemenu.openBook();
    this.player.pausePlayer();
  }

  createMap(layer1, layer2, keyMap, tileMap){
    this.map = this.make.tilemap({ 
      key: keyMap, 
      tileWidth: 16, 
      tileHeight: 16 
  });
    const tileset = this.map.addTilesetImage('tileset', tileMap);
    this.groundLayer = this.map.createStaticLayer(layer1, [tileset]).setDepth(-1);
    this.immovableLayer = this.map.createStaticLayer(layer2, [tileset]);    

    this.groundLayer.setCollisionByProperty({collider : true});
    this.immovableLayer.setCollisionBetween(1, 999, true);


  }
}
