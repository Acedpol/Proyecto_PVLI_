import player from './player.js';
import health from './health.js';
import pausemenu from './pausemenu.js';
import enemy from './enemy.js';
import item from './item.js';
import key from './key.js';
import batery from './batery.js';
import door from './door.js';
import zone from './zone.js'
import healthitem from './healthitem.js';
import levelScene from './levelScene.js';

export default class game extends levelScene {
    constructor() {
        super("game");
    }
    
    // ------------ MOTOR -------------

    create() {
        super.create();
        // Escenario: mapa
        this.createMap("Superficie", "Muebles", 'MueblesFrente', 'TileSetCaminos', 'Ambiente', 'Nivel', 'tilemap', 'ambiente');
        this.physics.world.setBounds(0, 0, this.map.tileWidth * this.map.width, this.map.tileHeight * this.map.height);
        this.map_objects = this.map.objects[0].objects; // array de objetos sacado del array de ObjectLayer's
        this.zones = this.physics.add.group({key: 'zone', frameQuantity: 0});
        
        // waitter: cuando se inicia la colisión, resta vida (todo lo que sea matter)
        this.matter.world.on('collisionstart', function (event)  { this.scene.quitaVida(); });
        this.cat1 = this.matter.world.nextCategory();

        var enemycount = 0;

        for (const objeto of this.map.getObjectLayer('capaObjetos').objects) {
            switch(objeto.name){
                case 'player':
                    this.player = new player(this, objeto.x, objeto.y, 'player');
                    this.player.setCols_Scene(this);
                    this.player.setCols_Stage(this);
                    break;
                case 'enemigo': 
                    this.enemies.add(new enemy(this, objeto.x, objeto.y, 'enemy',
                    objeto.properties[0].value, objeto.properties[1].value, objeto.properties[2].value, enemycount), true);
                    this.zones.getChildren()[enemycount].setCollidesWith(this.cat1);
                    enemycount++;
                    break;
                case 'key':
                    this.objects.add(new key(this, objeto.x, objeto.y, 'items', 7));
                    break;
                case 'door':
                    this.objects.add(new door(this, objeto.x, objeto.y, objeto.properties[0].value));
                    break;
                case 'healthitem':
                    this.objects.add(new healthitem(this, objeto.x, objeto.y, 'items',
                    objeto.properties[1].value, objeto.properties[0].value));
                    break;
                
                
            }
        }

        this.playerCol.setCollisionCategory(this.cat1);


        // Player / Jugador : abuelo
        //this.setPlayer();

        // Enemigos : anciano
        //this.setEnemies();
        // Final: Platero, (...) con un trotecillo alegre
        this.setPlatero();

        // this.createMap("Superficie", "Muebles", 'Hogar', 'tilemap');

        /*  this.shape=this.cache.json.get('zonePhy');
        console.log(this.shape);*/
        
        // this.enemy=new enemy(this,400,150,"enemy",0,0,0,"zone");
        /* this.zones = this.physics.add.group({key: 'zone', frameQuantity: 0});
        this.zones.getChildren()[0] = new zone(this, this.enemies.getChildren()[0].x,  this.enemies.getChildren()[0].y+(this.enemies.getChildren()[0].height/2),'zone', 100, this.enemies.getChildren()[0].dir, 0);*/
  
        // this.debugCollisionsMapa();


        // Vista o punto de vista: cámara
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0, 0, this.map.tileWidth * this.map.width, this.map.tileHeight * this.map.height);
        
        // Creación manual de objetos (tendrán que estar en Tiled)
        this.objects.getChildren()[0] = new batery(this, 400, 2050, 'items', 18);
        this.objects.getChildren()[1] = new key(this, 450, 2050, 'items', 7);
        this.objects.getChildren()[2] = new door(this, 500, 2050, 'door');
        this.objects.getChildren()[2].scale = 0.2;
        this.objects.getChildren()[0].x = this.map_objects[0].x; // añadido
        this.objects.getChildren()[0].y = this.map_objects[0].y; // añadido

        // // colisiones player
        this.physics.add.collider( this.player, this.enemy ); // enemigos
        this.physics.add.collider( this.player, this.objects, (o1, o2) => { o2.catchObject() } ); // objetos
        this.physics.add.collider( this.player, this.groundLayer); // terreno
        this.physics.add.collider( this.player, this.immovableLayer); // muebles

        // Para abrir puertas (usado en door.js)
        this.keyZ = this.input.keyboard.addKey('Z');
        
        // tecla de salida
        this.input.keyboard.addKey('ESC').on('down', event => { this.pause() });
    }

    update(time, delta) {
        this.movePlayerCol();
    }

    // ----------- MÉTODOS AUXILIARES
    
    movePlayerCol() {
        this.playerCol.setPosition(this.player.x,this.player.y);
    }

    // ----------- SETTERS -------------

    setPlayer() {
        this.player = new player(this, 350, 2050, "player");
        this.player.setCols_Scene(this);
        this.player.setCols_Stage(this);
    }

    setPlatero() {
        this.platero = new item(this, 1400, 140, 'burro', 0);
        this.platero.scale = 0.33;
        // // the end of the game!
        this.physics.add.overlap(this.player, this.platero, event => { this.scene.start('mainMenu') } );
    }

    setEnemies() {
        // // filtro: colisiones player y enemies
        this.cat1 = this.matter.world.nextCategory();
        this.playerCol.setCollisionCategory(this.cat1); // capa de colisiones de player
        var k = 0;
        this.map_objects.forEach(elem => {
            this.enemies.getChildren()[k] = new enemy( this, elem.x, elem.y, 'enemy', 0, 100, 1 );
            this.enemies.getChildren()[k].zones.getChildren()[0].setCollidesWith(this.cat1);
            k++;
        });
    }
}