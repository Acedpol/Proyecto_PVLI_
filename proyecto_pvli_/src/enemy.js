export default class enemy extends Phaser.GameObjects.Sprite {
  //dir=0->Abajo, dir=1->Arriba, dir=2->Izquierda, dir=3->Derecha
    constructor(scene, x, y, texture,dir) {
      super(scene, x, y, texture,dir, 0);
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.body.setImmovable();
      this.body.setCollideWorldBounds();
      this.speed = 300;
      this.area = 200;
      this.pause = false;
      this.dir=dir;
    }
    preUpdate(){
      this.quitaVida();
    }
    
    quitaVida(){
        if(this.dir==0){
          if(!this.pause && this.scene.player.y<this.y+this.area && this.scene.player.y>this.y && this.scene.player.x>this.x-5&&this.scene.player.x<this.x+5){
            this.scene.player.health--;
           }
        }
        else if(this.dir==1){
          if(!this.pause && this.scene.player.y>this.y-this.area && this.scene.player.y<this.y && this.scene.player.x>this.x-5&&this.scene.player.x<this.x+5){
            this.scene.player.health--;
           }
        }
        else if(this.dir==2){
          if(!this.pause && this.scene.player.x>this.x-this.area && this.scene.player.x<this.x && this.scene.player.y>this.y-5&&this.scene.player.y<this.y+5){
            this.scene.player.health--;
           }
        }
        else if(this.dir==3){
          if(!this.pause &&this.scene.player.x<this.x+this.area && this.scene.player.x>this.x && this.scene.player.y>this.y-5&&this.scene.player.y<this.y+5){
            this.scene.player.health--;
           }
        }
      }
    
    
    pauseEnemy(){
      this.pause = !this.pause;
  }
}
 