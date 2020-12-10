
export default class health extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
      super(scene, x, y, texture, 0);
      this.displayOriginX=0;
      this.displayWidth=300;
      this.setScrollFactor(0);
      this.displayHeight=50;
      this.scene.add.existing(this);      
    }
    preUpdate(){
        this.displayWidth=this.scene.player.health*300/100;
    }
  }