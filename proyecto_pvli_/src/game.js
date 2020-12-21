import player from './player.js';
import health from './health.js';
import pausemenu from './pausemenu.js';
import enemy from './enemy.js';
import item from './item.js';

export default class game extends Phaser.Scene {
  constructor() {
    super({ key: "game" });
  }
  preload() {}

  create() {
    this.cameras.main.fadeIn(1250);
    // this.createMap("Superficie", "Muebles", 'Hogar', 'tilemap');
    this.createMap("Superficie", "Muebles", 'Nivel', 'tilemap', 'ambiente'); 
    this.player = new player(this, 350, 2050, "player");
    
    this.enemy=new enemy(this,400,150,"enemy",0,0,0);
    this.cameras.main.startFollow(this.player);
    
    this.physics.add.collider(this.player,this.enemy);
    this.pausemenu  = new pausemenu(this, this.player.x, this.player.y, "libro");
    this.live = new health(this,320,190,"live");
    
    this.physics.world.setBounds(0, 0, this.map.tileWidth * this.map.width, this.map.tileHeight * this.map.height);
    this.cameras.main.setBounds(0, 0, this.map.tileWidth * this.map.width, this.map.tileHeight * this.map.height);

    this.objects = this.physics.add.group({key: 'items', frameQuantity: 1});
    this.objects.getChildren()[0] = new item(this, 400, 2050, 'items', 18);

    this.cameras.main.zoom = 2; 
    // agregado de colisiones del mapa al jugador:
    this.physics.add.collider(this.player, this.groundLayer);
    this.physics.add.collider(this.player, this.immovableLayer); 
    // this.debugCollisionsMapa();

    this.input.keyboard.addKey('ESC').on('down', event => { this.pause() });

    // Coge objetos
    this.physics.add.overlap(this.player, this.objects, (o1, o2) => { this.catchObject(o2) } );

    // Inventario
    this.contadorLlaves = 0;
    this.contadorPilas = 0;
  }

  update(time, delta) {
    //console.log(this.player.health);
  }

  pause(){
    this.pausemenu.openBook();
    this.player.pausePlayer();
    this.enemy.pauseEnemy();
  }

  createMap(layer1, layer2, keyMap, tileMap, tileZone){
    // creación del mapa:
    this.map = this.make.tilemap({ 
      key: keyMap, 
      tileWidth: 16, 
      tileHeight: 16 
    });
    // creación de layers:
    const tileset = this.map.addTilesetImage('TileSetCaminos', tileMap);
    const tileset2 = this.map.addTilesetImage('Ambiente', tileZone);
    this.groundLayer = this.map.createStaticLayer(layer1, [tileset]).setDepth(-1);
    this.immovableLayer = this.map.createStaticLayer(layer2, [tileset2]);
    // this.immovableLayer = this.map.createStaticLayer(layer2, [tileset]);    
    // // definición de colisiones:
     this.groundLayer.setCollisionByProperty({collider : true}); // -> con propiedad en el editor
     this.immovableLayer.setCollisionByProperty({collider : true}); // -> con propiedad en el editor
    // this.immovableLayer.setCollisionByProperty({collider : true});
    //this.immovableLayer.setCollisionBetween(1, 3800, true); //-> con indices   
    
    
  }

  // render / debug de las colisiones en el mapa
  debugCollisionsMapa() {
    this.immovableLayer.renderDebug(this.add.graphics().setAlpha(0.60));
    this.groundLayer.renderDebug(this.add.graphics().setAlpha(0.60));
  }

  catchObject(obj){
    if(obj.visible == true){
      obj.setVisible(false);
      if(obj.id === 'llave') this.contadorLlaves = this.contadorLlaves + 1;
      if(obj.id  === 'pila') this.contadorPilas = this.contadorPilas + 1;
    }

  }

  getLlaves(){ return this.contadorLlaves; }

  getPilas(){ return this.contadorPilas; }
}
