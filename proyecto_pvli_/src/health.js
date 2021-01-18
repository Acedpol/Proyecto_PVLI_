
export default class health extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture, 0);
        this.displayOriginX = 0;
        this.displayWidth = 150;
        this.setScrollFactor(0);
        this.displayHeight = 20;
        this.lifebar = this.scene.add.sprite(x - 20, y, 'lifebar').setDepth(11);
        this.lifebar.displayOriginX = 0;
        this.lifebar.displayHeight = 20;
        this.lifebar.displayWidth = 170;
        this.lifebar.setScrollFactor(0);
        this.scene.add.existing(this);      
    }

    preUpdate() {
        this.displayWidth=this.scene.player.health*150/100;
    }
}