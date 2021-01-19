import item from './item.js';

export default class healthitem extends item {
    constructor(scene, x, y, texture, numItem, health){
        super(scene, x, y, texture, numItem);
        this.health = health;
    }

    catchObject(){
        if(this.health < 0) this.pickupsound = 'damagesound';
        else this.pickupsound = 'healsound';
        
       /* if(this.scene.player.addOrRemoveLife(this.health)){
        this.scene.sound.play(this.pickupsound);
        this.destroy();
        }*/
        if((this.health<0 && this.scene.player.health>0)||(this.health>0 && this.scene.player.health<this.scene.player.maxHealth)){
                this.scene.player.addOrRemoveLife(this.health);
                this.scene.sound.play(this.pickupsound);
                this.destroy();
        }
    }
}