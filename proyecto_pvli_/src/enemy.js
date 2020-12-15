export default class enemy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
      super(scene, x, y, texture, 0);
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.body.setImmovable();
      this.body.setCollideWorldBounds();
      this.speed = 300;
      this.area = 200;
      this.pause = false;
    }
    preUpdate(){
      this.quitaVida();
    }
    quitaVida(){
      if(!this.pause && this.scene.player.y<this.y+this.area && this.scene.player.y>this.y && this.scene.player.x>this.x-20&&this.scene.player.x<this.x+20){
        this.scene.player.health--;
      }
    }
    
    pauseEnemy(){
      this.pause = !this.pause;
  }
 }