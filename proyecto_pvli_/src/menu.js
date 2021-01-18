import player from './player.js';
import health from './health.js';
import pausemenu from './pausemenu.js';
import item from './item.js';
import healthitem from './healthitem.js';
import levelScene from './levelScene.js';

export default class menu extends levelScene {
    constructor() {
        super("menu");
    }
    
    preload() {}
    
    create() {
        super.create();
        // Escenario: mapa
        super.createMap("Superficie", "Muebles", "MueblesFrente", 'tileset', 'tileset', 'Hogar', 'tilemapmenu', 'tilemapmenu');
        this.physics.world.setBounds(0, 0, this.map.tileWidth * this.map.width, this.map.tileHeight * this.map.height);

        this.contar = 0; // no se que es este contador..
        
        for (const object of this.map.getObjectLayer('ChangeSceneLayer').objects){
            if(object.name === 'Changer') {
                this.trigger = this.add.zone(object.x, object.y);
                this.trigger.setSize(object.width, object.height);
                this.physics.world.enable(this.trigger);
                this.trigger.body.moves = false;
                this.trigger.escena = object.properties[0].value;
            }
        }
        
        // Player / Jugador : abuelo
        this.player = new player(this, (this.map.tileWidth * this.map.width) / 2, (this.map.tileHeight * this.map.height) / 2, "player");
        this.player.setCols_Scene(this);
        
        this.physics.add.overlap( this.player, this.objects, (o1, o2) => { o2.catchObject() } )
        this.objects.getChildren()[0] = new healthitem(this, 450, 200, 'items', 42, -10);
        this.objects.getChildren()[1] = new healthitem(this, 250, 200, 'items', 32, 10);

        // Vista o punto de vista: cámara
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0, 0, this.map.tileWidth * this.map.width, this.map.tileHeight * this.map.height);
    }

    update(time, delta) {
        if(this.physics.overlap(this.player, this.trigger)) {
            setTimeout(() => {
            this.scene.start(this.trigger.escena);
            }, 500);
        }
        //console.log(this.player.health);    
    }

    contador(){
        this.contar++;
    }
}
