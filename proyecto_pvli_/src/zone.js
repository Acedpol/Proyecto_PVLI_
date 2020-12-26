export default class zone extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, h,dir) {
        super(scene,x, y, texture, h,dir, 0);
       this.scene.add.existing(this);
       this.displayHeight=h;
       this.scene.physics.add.existing(this);
       this.dir=dir;
       if(this.dir==0){
           this.angle=0;
       }
       else if(this.dir==1){
           this.angle=180;
       }
       else if(this.dir==2){
            this.angle=90;
       }
       else if(this.dir==3){
            this.angle=270
       }
       
        
    }
    preUpdate(){
        this.changeAngle();
        this.move();
    }
    move(){
        this.x=this.scene.enemies.getChildren()[0].x;
        this.y=this.scene.enemies.getChildren()[0].y+(this.scene.enemies.getChildren()[0].height/2);
    }
    changeAngle(){
        if(this.scene.enemies.getChildren()[0].dir==0){
            this.angle=0;
        }
        else if(this.scene.enemies.getChildren()[0].dir==1){
            this.angle=180;
        }
        else if(this.scene.enemies.getChildren()[0].dir==2){
            this.angle=90;
        }
        else if(this.scene.enemies.getChildren()[0].dir==3){
            this.angle=270;
        }
    }
}