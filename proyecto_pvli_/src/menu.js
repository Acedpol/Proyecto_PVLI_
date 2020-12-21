import player from './player.js';
import health from './health.js';
import pausemenu from './pausemenu.js';

export default class menu extends Phaser.Scene {
  constructor() {
    super({ key: "menu" });
  }
  preload() {}

  

  create() {
    this.cameras.main.fadeIn(1000);
    this.createMap("Superficie", "Muebles", 'Hogar', 'tilemapmenu');
    this.player = new player(this, (this.map.tileWidth * this.map.width) / 2, (this.map.tileHeight * this.map.height) / 2, "player");

    this.cameras.main.startFollow(this.player);

    this.pausemenu  = new pausemenu(this, this.player.x, this.player.y, "libro");
    this.live = new health(this,320,190,"live");
    
    this.physics.world.setBounds(0, 0, this.map.tileWidth * this.map.width, this.map.tileHeight * this.map.height);
    this.cameras.main.setBounds(0, 0, this.map.tileWidth * this.map.width, this.map.tileHeight * this.map.height);


    this.cameras.main.zoom = 2; 

    // agregado de colisiones del mapa al jugador:
    this.physics.add.collider(this.player, this.groundLayer);
    this.physics.add.collider(this.player, this.immovableLayer); 
    // this.debugCollisionsMapa();
    
    this.contar = 0;
    
    for (const object of this.map.getObjectLayer('ChangeSceneLayer').objects){
      if(object.name === 'Changer') {
        this.trigger = this.add.zone(object.x, object.y);
        this.trigger.setSize(object.width, object.height);
        this.physics.world.enable(this.trigger);
        this.trigger.body.moves = false;
        this.trigger.escena = object.properties[0].value;
      }
    }

    this.input.keyboard.addKey('ESC').on('down', event => { this.pause() });
  }

  update(time, delta) {
    if(this.physics.overlap(this.player, this.trigger)) {
      setTimeout(() => {
      this.scene.start(this.trigger.escena);
    }, 500);
  }
    //console.log(this.player.health);
  }

  pause(){
    this.pausemenu.openBook();
    this.player.pausePlayer();
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
    this.groundLayer = this.map.createStaticLayer(layer1, [tileset]);
    this.immovableLayer = this.map.createStaticLayer(layer2, [tileset]);    
    // // definición de colisiones:
    this.groundLayer.setCollisionByProperty({collider : true}); // -> con propiedad en el editor
    this.immovableLayer.setCollisionByProperty({collider : true});
    // ----------- this.immovableLayer.setCollisionBetween(1, 999, true); -> con indices   
    
    
  }

  changeScene(escena){
    

  }

  contador(){
    this.contar++;
  }

  // render / debug de las colisiones en el mapa
  debugCollisionsMapa() {
    this.immovableLayer.renderDebug(this.add.graphics().setAlpha(0.60));
    this.groundLayer.renderDebug(this.add.graphics().setAlpha(0.60));
  }
}
