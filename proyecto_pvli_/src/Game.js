export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "Game" });
  }
  preload() {}

  create() {
    this.add.text(10, 10, "¡Hola, mundo!", { fontColor: 0x76C9F0 });
  }

  update(time, delta) {}
}
