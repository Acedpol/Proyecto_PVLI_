import Player from './Player.js';
import Player2 from './Player2.js';

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "Game" });
  }
  preload() {}

  create() {
    this.add.image(this.scale.width / 2, this.scale.height / 2, 'burro');
    this.add.text((this.scale.width / 3 + 125), this.scale.height / 3, "¡Hola, Soy Platero!", { fontColor: 0x76C9F0 });
    this.player = new Player(this, 300, 200, 'player');
    this.player2=new Player2(this,600,200,'player');
    this.cameras.main.startFollow(this.player);
    this.physics.add.collider(this.player,this.player2);
  }

  update(time, delta) {

  }
}
