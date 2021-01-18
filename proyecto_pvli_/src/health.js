
export default class health extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture, 0);
        this.displayOriginX = 0;
        this.displayWidth = 150;
        this.setScrollFactor(0);
        this.displayHeight = 20;
        this.scene.add.sprite(95, 20, 'lifebar').setDepth(4);
        this.scene.add.existing(this);      
    }

    preUpdate() {
        this.displayWidth=this.scene.player.health*150/100;
    }
}