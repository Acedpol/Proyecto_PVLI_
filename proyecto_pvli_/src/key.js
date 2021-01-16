import item from './item.js';

export default class key extends item {

    catchObject(){
      if(this.visible) {
          this.setVisible(false);
            this.scene.contadorLlaves++;
      }
    }
}