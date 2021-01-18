import item from './item.js';

export default class door extends item {
    constructor(scene, x, y, texture, numItem) {
        super(scene, x, y, texture, numItem);
        this.setVisible(false);
        this.door = new item(this.scene, this.x, this.y, 'door', 0);
        this.door.scale = 0.2;
        this.scene.physics.add.collider(this.scene.player, this.door);
    }

    catchObject() {
        if(this.scene.contadorLlaves > 0 && this.scene.keyZ.isDown){
            this.scene.contadorLlaves--;
            this.door.destroy();
            this.destroy();
        }
    }
}