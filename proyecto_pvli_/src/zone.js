export default class zone extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, h, w) {
        super(scene,x, y, texture, h, w,0);
        //console.log(this.width+" "+this.height);
       // this.setScale(20, 40);
       /*this.width=10;
       this.height=100;*/
       this.scene.add.existing(this);
       this.displayHeight=h;
       this.displayWidht=w/2;
       //console.log(this.width+" "+this.height);
       //this.displayOriginY=0;
      // this.displayOriginX=0;
       this.scene.physics.add.existing(this);
       //this.scene.add.sprite(x,y,this.texture);
        //this.setTexture(this.texture,0);
       
       
        
    }
}