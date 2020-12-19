//import game from "./game";

export default class pausemenu extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
      super(scene, x, y, texture, 0);
      this.scene.add.existing(this);
      this.scale = 0.25;
      this.setVisible(false);
      this.cursors = this.scene.input.keyboard.createCursorKeys();
      this.setDepth(2);
      this.controls = this.scene.add.image(this.x, this.y, "controles");
      this.controls.scale = 0.05;
      this.controls.setVisible(false);
      this.controls.setDepth(2);
    }
    
    preUpdate(time, delta){
        if(this.visible){
            this.x=this.scene.player.x;
            this.y=this.scene.player.y; 
            this.controls.x = this.x - 85;
            this.controls.y = this.y;
        }
    }

    openBook(){
        if(this.visible) {
            this.setVisible(false);
            this.controls.setVisible(false);
        }
        else {
            this.setVisible(true);
            this.controls.setVisible(true);
        }
    }
  }
  