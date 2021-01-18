import item from './item.js';

export default class door extends item {

    catchObject() {
        if(this.scene.contadorLlaves > 0 && this.scene.keyZ.isDown){
            this.scene.contadorLlaves--;
            this.destroy();
        }
    }
}