import player from './player.js';
import health from './health.js';
import pausemenu from './pausemenu.js';

export default class game extends Phaser.Scene {
  constructor() {
    super({ key: "game" });
  }
  preload() {}

  create() {

    this.add.image(this.scale.width / 2, this.scale.height / 2, 'burro');
    this.add.text((this.scale.width / 3 + 125), this.scale.height / 3, "¡Hola, Soy Platero!", { fontColor: 0x76C9F0 });
    this.player = new player(this, 300, 200, "player");
    this.live = new health(this,0,25,"live");
    this.cameras.main.startFollow(this.player);
    this.physics.add.collider(this.player);
    this.pausemenu  = new pausemenu(this, this.player.x, this.player.y, "libro")
    this.pausemenu.scale = 0.8;
    
    this.input.keyboard.addKey('ESC').on('down', event => { this.pause() });
  }

  update(time, delta) {
    
  }

  pause(){
    this.pausemenu.openBook();
    this.player.pausePlayer();
  }
}
