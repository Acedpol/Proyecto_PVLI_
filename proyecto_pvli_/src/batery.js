import item from './item.js';

export default class batery extends item {

    catchObject(){

        if(this.scene.radio.duration<this.scene.radio.maxDuration){
        this.scene.sound.play('pickupsound');
        this.scene.radio.duration=this.scene.radio.maxDuration;
        this.destroy();
        }
    }
}