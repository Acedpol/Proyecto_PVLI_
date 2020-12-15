
export default class pausemenu extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
      super(scene, x, y, texture, 0);
      this.scene.add.existing(this);
      this.scale = 0.5;
      this.setVisible(false);
      this.cursors = this.scene.input.keyboard.createCursorKeys();
    }
    
    preUpdate(time, delta){
        if(this.visible){
            this.x=this.scene.player.x;
            this.y=this.scene.player.y;

            
        }
    }

    openBook(){
        if(this.visible) this.setVisible(false);
        else this.setVisible(true);
    }
  }
  