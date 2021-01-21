import player from './player.js';
import health from './health.js';
import pausemenu from './pausemenu.js';
import enemy from './enemy.js';
import item from './item.js';
import key from './key.js';
import batery from './batery.js';
import door from './door.js';
import zone from './zone.js';
import healthitem from './healthitem.js';
import levelscene from './levelscene.js';
import radio from './radio.js';

export default class game extends levelscene {
    constructor() {
        super("game");
    }
    
    // ------------ MOTOR -------------

    create() {
        super.create();
        // Escenario: mapa
        this.createMap("Superficie", "Muebles", 'MueblesFrente', 'TileSetCaminos', 'Ambiente', 'Nivel', 'tilemap', 'ambiente');
        this.physics.world.setBounds(0, 0, this.map.tileWidth * this.map.width, this.map.tileHeight * this.map.height);
        
        this.radio=new radio(this,350, 225, "durationRadio",300);

        this.zones = this.physics.add.group({key: 'zone', frameQuantity: 0});
 
        this.cat1 = this.matter.world.nextCategory();
        //Variable usada para las zonas de peligro de los enemigos
        var enemycount = 0;

        //Bucle para obtener los objetos de la capa de tiled

        for (const objeto of this.map.getObjectLayer('capaObjetos').objects) {
            switch(objeto.name){
                case 'player':
                    this.setPlayer(objeto.x, objeto.y);
                    break;
                case 'enemigo': 
                    this.setEnemies(objeto.x, objeto.y, objeto.properties[0].value,
                    objeto.properties[1].value, objeto.properties[2].value, enemycount);
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
                case 'batery':
                    this.objects.add(new batery(this, objeto.x, objeto.y, 'items', 17));
                    break;
                
            }
        }

        // waitter: cuando se inicia la colisión, resta vida (todo lo que sea matter)
        this.playerCol.setCollisionCategory(this.cat1);

        this.matter.world.on('collisionstart', function (event) { 
            if(this.scene.radio.on==false && this.scene.player.health>0){
            this.scene.dealHealth(-10);
            this.scene.sound.play('damagesound');
            }
        });

        // Player / Jugador : abuelo
        // Enemigos : anciano
        // Final: Platero, (...) con un trotecillo alegre
        this.setPlatero();

        // Vista o punto de vista: cámara
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0, 0, this.map.tileWidth * this.map.width, this.map.tileHeight * this.map.height);

        // Para abrir puertas (usado en door.js)
        this.keyZ = this.input.keyboard.addKey('Z');
        this.keyX = this.input.keyboard.addKey('X');
        this.sound.play('dooropen');
    }

    update(time, delta) {
        this.movePlayerCol();
        if(this.player.health<=0){
            this.scene.start('pantallamuerte');
        }
    }

    // ----------- MÉTODOS AUXILIARES
    
    movePlayerCol() {
        this.playerCol.setPosition(this.player.x,this.player.y);
    }

    dealHealth(vida){
        
        this.player.addOrRemoveLife(vida);
        
    }

    // ----------- SETTERS -------------

    setPlayer(x, y) {
        this.player = new player(this, x, y, "player");
        this.player.setCols_Scene(this);
        this.player.setCols_Stage(this);
    }

    setPlatero() {
        this.platero = new item(this, 1400, 140, 'burro', 0);
        this.platero.scale = 0.33;
        // // the end of the game!
        this.physics.add.overlap(this.player, this.platero, event => { this.scene.start('endscene') } );
    }

    setEnemies(x, y, dir, dist, typeMov, enemycount) {
        // // filtro: colisiones player y enemies
        this.enemies.add(new enemy(this, x, y, 'enemy',
        dir, dist, typeMov, enemycount), true);
    }
}