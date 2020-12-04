import Player from './player.js';


export default class game extends Phaser.Scene {
  constructor() {
    super({ key: "game" });
  }
  preload() {}

  create() {
    this.add.image(this.scale.width / 2, this.scale.height / 2, 'burro');
    this.add.text((this.scale.width / 3 + 125), this.scale.height / 3, "¡Hola, Soy Platero!", { fontColor: 0x76C9F0 });
    this.player = new Player(this, 300, 200, 'player');
    this.cameras.main.startFollow(this.player);
    this.physics.add.collider(this.player);
  }

  update(time, delta) {

  }
}
