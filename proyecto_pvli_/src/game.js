import player from './player.js';
import health from './health.js';

export default class game extends Phaser.Scene {
  constructor() {
    super({ key: "game" });
  }
  preload() {}

  create() {
    this.add.image(this.scale.width / 2, this.scale.height / 2, 'burro');
    this.add.text((this.scale.width / 3 + 125), this.scale.height / 3, "¡Hola, Soy Platero!", { fontColor: 0x76C9F0 });
    this.player = new player(this, 300, 200, "player");
    this.live = new health(this,this.player.x,this.player.y-30,"live");
    this.cameras.main.startFollow(this.player);
    this.physics.add.collider(this.player);
    
    this.pause = false;
    this.input.keyboard.addKey('ESC').on('down', event => { this.pauseFunction() });
  }

  update(time, delta) {
    
  }

  pauseFunction(){
    this.pause = !this.pause;
    this.player.pausePlayer();
    if(this.pause) console.log('game paused');
    else console.log('game resumed');
  }
}
