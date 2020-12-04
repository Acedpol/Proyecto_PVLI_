
export default class player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
      super(scene, x, y, texture, 0);
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.body.setCollideWorldBounds();
      this.speed = 300;
      this.cursors = this.scene.input.keyboard.createCursorKeys();
      this.health = 100;
      this.lives = 3;
    }
    

    preUpdate() {
        super.preUpdate()
        if(this.cursors.up.isDown) {
            this.body.setVelocityY(-this.speed);
            //this.play('up', true);
        }
        if(this.cursors.down.isDown) {
            this.body.setVelocityY(this.speed);
            //this.play('down', true);
        }
        if(this.cursors.right.isDown) {
            this.body.setVelocityX(this.speed);
            //this.play('right', true);
        }
        if(this.cursors.left.isDown) {
            this.body.setVelocityX(-this.speed);
            //this.play('left', true);
        }
        if(this.cursors.left.isUp && this.cursors.right.isUp) this.body.setVelocityX(0);
        if(this.cursors.up.isUp && this.cursors.down.isUp) this.body.setVelocityY(0);
    }
  }
  