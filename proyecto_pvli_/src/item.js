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
      if(numItem === 18) this.id = 'pila';
      else if(numItem === 7) this.id = 'llave';
      else if(texture === 'burro') this.id = 'platero';
      else this.id === 'unknown';
    }
}