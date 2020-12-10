
export default class health extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
      super(scene, x, y, texture, 0);
      //this.setOrigin(200,300);
      this.displayOriginX=0;
      this.displayWidth=300;
      //this.wi=this.scene.player.health;
      this.displayHeight=50;
      this.x=this.scene.player.x-700;
      this.y=this.scene.player.y-380;
      this.scene.add.existing(this);      
    }
    preUpdate(){
      this.x=this.scene.player.x-700;
      this.y=this.scene.player.y-400;
       // this.x=this.scene.player.x-(this.wi/2);
       // this.y=this.scene.player.y-30;
        this.displayWidth=this.scene.player.health*300/100;
    }
  }