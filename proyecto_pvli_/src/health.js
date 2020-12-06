
export default class player extends Phaser.GameObjects.Image {
    constructor(scene, x, y, texture) {
      super(scene, x, y, texture, 0);
      this.displayWidth=scene.player.health;
      this.displayHeight=5;
      this.scene.add.existing(this);
    }
    preUpdate(){
      
    }
  }