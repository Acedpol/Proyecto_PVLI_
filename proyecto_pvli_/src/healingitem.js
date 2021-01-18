import item from './item.js';

export default class healthitem extends item {
    constructor(scene, x, y, texture, numItem, health){
        super(scene, x, y, texture, numItem);
        this.health = health;
    }

    catchObject(){
        this.scene.player.addOrRemoveLife(this.health);
        this.destroy();
    }
}