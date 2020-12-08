
export default class health extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
      super(scene, x, y, texture, 0);
      //this.setOrigin(200,300);
      this.displayOriginX=0;
      this.displayWidth=this.scene.player.health;
      this.wi=this.scene.player.health;
      this.displayHeight=5;
      this.x=this.x-(this.wi/2);
      this.scene.add.existing(this);      
    }
    preUpdate(){
        this.x=this.scene.player.x-(this.wi/2);
        this.y=this.scene.player.y-30;

        this.displayWidth=this.scene.player.health;
    }
  }