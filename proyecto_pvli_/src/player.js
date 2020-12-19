
export default class player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
      super(scene, x, y, texture, 0);
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.body.setCollideWorldBounds();
      this.body.setSize(this.width / 1.5, this.height, true);
      this.speed = 180;
      this.body.setMaxSpeed(this.speed);
      this.cursors = this.scene.input.keyboard.createCursorKeys();
      this.health = 100;
      this.lives = 3;
      this.x=x;
      this.y=y;
      this.pause = false;
      this.setDepth(1);
    }
    

    preUpdate(time, delta) {
        super.preUpdate(time, delta);
        if(!this.pause){
            if(this.cursors.up.isDown) {
                this.body.setVelocityY(-this.speed);
            }
            if(this.cursors.down.isDown) {
                this.body.setVelocityY(this.speed);
            }
            if(this.cursors.right.isDown) {
                this.body.setVelocityX(this.speed);
            }
            if(this.cursors.left.isDown) {
                this.body.setVelocityX(-this.speed);
            }
        }
        if(this.cursors.left.isUp && this.cursors.right.isUp) this.body.setVelocityX(0);
        if(this.cursors.up.isUp && this.cursors.down.isUp) this.body.setVelocityY(0);

        let [velocityX, velocityY] = [this.body.velocity.x, this.body.velocity.y];

        this.animations(velocityX, velocityY);

        
    }

    animations(velocityX, velocityY){
        if(velocityX === 0) {
            if(velocityY === 0) {
                this.off('down', () => { this.anims.play('down', false, 2); });
                this.off('up', () => { this.anims.play('up', false, 2)});
                this.off('right', () => { this.anims.play('right', false, 2)});
                this.off('left', () => { this.anims.play('left', false, 2)});
            }
            else if(velocityY > 0) this.anims.play('down', true);
            else if (velocityY < 0) this.anims.play('up', true); 
        }
        if(velocityX > 0) this.anims.play('right', true);
        else if(velocityX < 0) this.anims.play('left', true);

    }

    pausePlayer(){
        this.pause = !this.pause;
        this.body.setVelocityX(0);
        this.body.setVelocityY(0);
    }
  }
  