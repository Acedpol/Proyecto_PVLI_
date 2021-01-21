import player from './player.js';
import health from './health.js';
import pausemenu from './pausemenu.js';
import item from './item.js';
import healthitem from './healthitem.js';
import levelscene from './levelscene.js';

export default class menu extends levelscene {
    constructor() {
        super("menu");
    }
    
    preload() {}
    
    create() {
        super.create();
        // Escenario: mapa
        super.createMap("Superficie", "MueblesFrente","Muebles", 'tileset', 'tileset', 'Hogar', 'tilemapmenu', 'tilemapmenu');
        this.physics.world.setBounds(0, 0, this.map.tileWidth * this.map.width, this.map.tileHeight * this.map.height);
        
        for (const object of this.map.getObjectLayer('capaObjetos').objects){
            switch(object.name){
                case 'changer':
                    this.trigger = this.add.zone(object.x, object.y);
                    this.trigger.setSize(object.width, object.height);
                    this.physics.world.enable(this.trigger);
                    this.trigger.body.moves = false;
                    this.trigger.escena = object.properties[0].value;
                    break;
                case 'player': 
                this.player = new player(this, object.x, object.y, "player")
                    break;
                case 'healthitem':
                this.objects.add(new healthitem(this, object.x, object.y, 'items',
                object.properties[1].value, object.properties[0].value ));
                break;
            }
        }

        this.player.setCols_Scene(this);
        this.physics.add.overlap( this.player, this.objects, (o1, o2) => { o2.catchObject() } )


        // Vista o punto de vista: cámara
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0, 0, this.map.tileWidth * this.map.width, this.map.tileHeight * this.map.height);
    }

    update(time, delta) {
        if(this.physics.overlap(this.player, this.trigger)) {
            setTimeout(() => {
            this.scene.start(this.trigger.escena);  
            }, 500);
            this.player.walk.stop();
            this.scene.stop();
        }
        //console.log(this.player.health);    
    }
}
