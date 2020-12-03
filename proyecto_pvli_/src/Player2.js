export default class Player2 extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, text) {
      super(scene, x, y, text, 0);
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.body.setCollideWorldBounds();
      this.speed = 300;
      this.cursors = this.scene.input.keyboard.createCursorKeys();
    }

    preUpdate() {
        if(this.cursors.up.isDown === true) {
            this.body.setVelocityY(this.speed);
            //this.play('up');
        }
        if(this.cursors.down.isDown === true) {
            this.body.setVelocityY(-this.speed);
            //this.play('down');
        }
        if(this.cursors.right.isDown === true) {
            this.body.setVelocityX(-this.speed);
            //this.play('right');
        }
        if(this.cursors.left.isDown === true) {
            this.body.setVelocityX(this.speed);
            //this.play('left');
        }
        if(this.cursors.left.isUp && this.cursors.right.isUp) this.body.setVelocityX(0);
        if(this.cursors.up.isUp && this.cursors.down.isUp) this.body.setVelocityY(0);
        
    }
  }
  