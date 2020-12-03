import Player from './Player.js';

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "Game" });
  }
  preload() {}

  create() {
    this.add.image(this.scale.width / 2, this.scale.height / 2, 'burro');
    this.add.text((this.scale.width / 3 + 125), this.scale.height / 3, "¡Hola, Soy Platero!", { fontColor: 0x76C9F0 });
    this.player = new Player(this, 300, 200, 'burro');
  }

  update(time, delta) {}
}
