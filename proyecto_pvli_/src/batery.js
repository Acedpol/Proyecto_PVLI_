import item from './item.js';

export default class batery extends item {

    catchObject(){
            this.scene.sound.play('pickupsound')
           // this.scene.contadorPilas++;
           
           this.scene.radio.duration=this.scene.radio.maxDuration;
            this.destroy();
    }
}