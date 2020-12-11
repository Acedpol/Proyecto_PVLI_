import player from './player.js';
import health from './health.js';
import pausemenu from './pausemenu.js';
import enemy from './enemy.js';

export default class game extends Phaser.Scene {
  constructor() {
    super({ key: "game" });
  }
  preload() {}

  create() {

    this.add.image(this.scale.width / 2, this.scale.height / 2, 'burro');
    this.add.text((this.scale.width / 3 + 125), this.scale.height / 3, "¡Hola, Soy Platero!", { fontColor: 0x76C9F0 });
    this.player = new player(this, 300, 200, "player");
    
    this.enemy=new enemy(this,300,400,"player");
    this.cameras.main.startFollow(this.player);
    this.physics.add.collider(this.player,this.enemy);
    this.pausemenu  = new pausemenu(this, this.player.x, this.player.y, "libro")
    this.pausemenu.scale = 0.8;
    this.live = new health(this,0,25,"live");
    this.input.keyboard.addKey('ESC').on('down', event => { this.pause() });
  }

  update(time, delta) {
    
    console.log(this.player.health);
  }

  pause(){
    this.pausemenu.openBook();
    this.player.pausePlayer();
  }
}
