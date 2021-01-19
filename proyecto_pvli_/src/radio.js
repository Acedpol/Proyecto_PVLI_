export default class radio extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture,n) {
        super(scene, x, y, texture,n, 0);
        this.displayOriginX = 0;
        this.displayWidth = 140;
        this.setScrollFactor(0);
        this.displayHeight = 15;
        this.r=this.scene.add.image(x-20,y,'radio').setDepth(10);
        this.r.displayOriginX = 0;
        this.r.displayHeight = 20;
        this.r.displayWidth = 170;
        this.r.setScrollFactor(0);
        this.duration=n;
        this.maxDuration=this.duration;
        this.on=false;
        this.setDepth(11);
        this.scene.add.existing(this);      
    }

    preUpdate(time,delta) {
        this.loseDuration();
        this.activeRadio();
        this.displayWidth=this.duration*150/100;
    }
    loseDuration(){
        if(this.on==true&& this.duration>0){
            this.duration--;
        }
    }
    activeRadio(){
        if(this.duration<=0){
            this.on=false;
        }
        else{
            if(this.on==false && this.duration>0 && this.scene.keyX.isDown){
                this.on=true;
        
            }
            else if(this.on==true && this.duration>0 && this.scene.keyX.isDown){
                this.on=false;
            }
        }
        
        
    }
}