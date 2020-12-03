
export default class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
      super(scene, x, y, 'player', 0);
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.body.setCollideWorldBounds;
      this.speed = 300;
      this.cursors = this.scene.input.keyboard.createCursorKeys();
    }
    
    preUpdate() {
        if(this.cursors.up.isDown === true) {
            this.body.setVelocityY(this.speed);
            this.play("up", true);
        }
        if(this.cursors.down.isDown === true) {
            this.body.setVelocityY(-this.speed);
            this.play("down", true);
        }
        if(this.cursors.right.isDown === true) {
            this.body.setVelocityX(this.speed);
            this.play("right", true);
        }
        if(this.cursors.left.isDown === true) {
            this.body.setVelocityX(-this.speed);
            this.play("left", true);
        }
        if(this.cursors.left.isUp && this.cursors.right.isUp) this.body.setVelocityX(0);
        if(this.cursors.up.isUp && this.cursors.down.isUp) this.body.setVelocityY(0);
        
    }
  }
  