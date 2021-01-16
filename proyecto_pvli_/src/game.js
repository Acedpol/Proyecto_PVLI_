import player from './player.js';
import health from './health.js';
import pausemenu from './pausemenu.js';
import enemy from './enemy.js';
import item from './item.js';
import key from './key.js';
import batery from './batery.js';
import zone from './zone.js'

export default class game extends Phaser.Scene {
  constructor() {
    super({ key: "game", physics:{
      arcade: { debug:true, },
      matter:{debug:true,gravity:1},
      } });
    
  }


  create() {
    this.cameras.main.fadeIn(1250);
    // this.createMap("Superficie", "Muebles", 'Hogar', 'tilemap');
    this.createMap("Superficie", "Muebles", 'MueblesFrente', 'Nivel', 'tilemap', 'ambiente'); 
    this.enemies = this.physics.add.group({key: 'enemy', frameQuantity: 0});
    this.enemies.getChildren()[0] = new enemy(this, 1000, 700, 'enemy',0,100,1);

   /* this.zones = this.physics.add.group({key: 'zone', frameQuantity: 0});
    this.zones.getChildren()[0] = new zone(this, this.enemies.getChildren()[0].x,  this.enemies.getChildren()[0].y+(this.enemies.getChildren()[0].height/2),'zone', 100, this.enemies.getChildren()[0].dir, 0);*/
    this.player = new player(this, 350, 2050, "player");
    
 
   this.playerCol=this.matter.add.sprite(this.player.x,this.player.y,'player',null,{label:'playerCol'});
   this.playerCol.setVisible(false);
  
 
    
   // this.enemy=new enemy(this,400,150,"enemy",0,0,0,"zone");
   
    this.cat1 = this.matter.world.nextCategory();
    this.playerCol.setCollisionCategory(this.cat1);
    this.enemies.getChildren()[0].zones.getChildren()[0].setCollidesWith(this.cat1);
  // cuando se inicia la colisión
this.matter.world.on('collisionstart', 
function (event)  {
    this.scene.quitaVida();
});

  




    this.cameras.main.startFollow(this.player);
    
    this.physics.add.collider(this.player,this.enemy);
    this.pausemenu  = new pausemenu(this, this.player.x, this.player.y, "libro");
    this.live = new health(this,320,190,"live").setDepth(3);
    
    this.physics.world.setBounds(0, 0, this.map.tileWidth * this.map.width, this.map.tileHeight * this.map.height);
    this.cameras.main.setBounds(0, 0, this.map.tileWidth * this.map.width, this.map.tileHeight * this.map.height);

    // Creación manual de objetos (tendrán que estar en Tiled)
    this.objects = this.physics.add.group({key: 'items', frameQuantity: 1});
    this.objects.getChildren()[0] = new batery(this, 400, 2050, 'items', 18);
    this.objects.getChildren()[1] = new key(this, 450, 2050, 'items', 7);
    
    // Coge objetos
    this.physics.add.overlap(this.player, this.objects, (o1, o2) => { o2.catchObject() } );

    // Creación de platero
    this.platero = new item(this, 1400, 140, 'burro', 1);
    this.platero.scale = 0.33;
    // Win
    this.physics.add.overlap(this.player, this.platero, event => { this.scene.start('mainMenu') } );

    this.cameras.main.zoom = 2; 
    // agregado de colisiones del mapa al jugador:
    this.physics.add.collider(this.player, this.groundLayer);
    this.physics.add.collider(this.player, this.immovableLayer); 
    // this.debugCollisionsMapa();

    this.input.keyboard.addKey('ESC').on('down', event => { this.pause() });
    

    // Inventario
    this.contadorLlaves = 0;
    this.contadorPilas = 0;

     // cuando se inicia la colisión

   
  }

  update(time, delta) {
    //console.log(this.player.health);
    this.movePlayerCol();
  /*  this.matter.world.on('collisionstart', (evento, cuerpo1, cuerpo2) =>  {
  console.log("Entro");
  if(cuerpo1.label==='playerCol'||cuerpo2.label==='playerCol'){
    this.quitaVida();
  }
// hacer algo
});*/
   
   
  }

  pause(){
    this.pausemenu.openBook();
    this.player.pausePlayer();
    this.enemies.getChildren()[0].pauseEnemy();
    //this.enemy.pauseEnemy();
  }

  createMap(layer1, layer2, layer3, keyMap, tileMap, tileZone){
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
  }

  quitaVida(){
    if(!this.player.pause){
      this.player.health=this.player.health-1;
      console.log(this.player.health);
    }
  }

  movePlayerCol(){
    this.playerCol.setPosition(this.player.x,this.player.y);
  }


}

