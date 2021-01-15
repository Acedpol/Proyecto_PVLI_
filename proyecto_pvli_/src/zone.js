//export default class zone extends Phaser.GameObjects.Sprite {
export default class zone extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y, texture, h, dir, enemy) {
        super(scene.matter.world,x, y, texture, h,dir, 0);
      
       this.setStatic(true);
       //this.scene.matter.add.image(this);
      // this.setOrigin(0,0);
       this.setScale(0.5,0.5);
       this.dir=dir;
       this.enemType = enemy;
       if(this.dir==0){
          // this.body.angle=45;
           this.angle=45;
       }
       else if(this.dir==1){
           this.angle=225;
       }
       else if(this.dir==2){
            this.angle=135;
       }
       else if(this.dir==3){
            this.angle=315;
       }
     // this.scene.physics.add.existing(this);
      //this.scene.matter.add.existing(this);
      this.setDepth(-1);
      this.scene.add.existing(this);
       
        
    }
    preUpdate(){
       // this.scene.matter.add.image(100,100,'zone');
       
        this.changeAngle();
        this.move();
        
        
    }
    move(){
        this.x=this.scene.enemies.getChildren()[this.enemType].x;
        this.y=this.scene.enemies.getChildren()[this.enemType].y+(this.scene.enemies.getChildren()[0].height/2);
        
    }
    changeAngle(){
        if(this.scene.enemies.getChildren()[this.enemType].dir==0){
            this.angle=45;
        }
        else if(this.scene.enemies.getChildren()[this.enemType].dir==1){
            this.angle=225;
        }
        else if(this.scene.enemies.getChildren()[this.enemType].dir==2){
            this.angle=135;
        }
        else if(this.scene.enemies.getChildren()[this.enemType].dir==3){
            this.angle=315;
        }
    }
}