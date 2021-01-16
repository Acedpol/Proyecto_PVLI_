export default class item extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, numItem) {
      super(scene, x, y, texture);
      this.setTexture(texture, numItem);
      this.scene.physics.add.existing(this);
      this.body.setImmovable();
      this.scene.add.existing(this);
      this.x = x;
      this.y = y;
      this.setPosition(this.x, this.y);
      this.setScale(this.width * 0.125, this.height * 0.125);
    }
}