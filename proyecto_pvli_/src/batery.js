import item from './item.js';

export default class batery extends item {

    catchObject(){
      if(this.visible) {
          this.setVisible(false);
            this.scene.contadorPilas++;
      }
    }
}