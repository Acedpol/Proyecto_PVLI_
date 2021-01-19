export default class radio extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture,n) {
        super(scene, x, y, texture,n, 0);
        this.displayOriginX = 0;
        this.displayWidth = 150;
        this.setScrollFactor(0);
        this.displayHeight = 20;
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
        if(this.active==true&& this.duration>0){
            this.duration--;
        }
    }
    activeRadio(){
        if(this.active==false && this.duration>0 && this.scene.keyX.isDown){
            this.active=true;
        }
        else if(this.active==true && this.duration>0 && this.scene.keyX.isDown){
            this.active=false;
        }
    }
}