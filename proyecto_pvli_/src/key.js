import item from './item.js';

export default class key extends item {

    catchObject() {
        this.scene.sound.play('pickupsound');
        this.scene.contadorLlaves++;
        this.destroy();
    }
}