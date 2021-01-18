import item from './item.js';

export default class healthitem extends item {
    constructor(scene, x, y, texture, numItem, health){
        super(scene, x, y, texture, numItem);
        this.health = health;
    }

    catchObject(){
        if(this.health < 0) this.pickupsound = 'damagesound';
        else this.pickupsound = 'healsound';
        this.scene.sound.play(this.pickupsound);
        this.scene.player.addOrRemoveLife(this.health);
        this.destroy();
    }
}