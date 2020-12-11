import player from './player.js';
import health from './health.js';
//import pausemenu from './pausemenu.js';
import map from './map.js';

export default class game extends Phaser.Scene {
  constructor() {
    super({ key: "game" });
  }
  preload() {}

  create() {
    this.player = new player(this, 300, 200, "player");
    this.live = new health(this,0,25,"live");
    this.cameras.main.startFollow(this.player);
    this.physics.add.collider(this.player);
    //this.pausemenu  = new pausemenu(this, this.player.x, this.player.y, "libro")
    //this.pausemenu.scale = 0.8;
    
    this.input.keyboard.addKey('ESC').on('down', event => { this.pause() });

    this.mapa = new map(this);
  }

  update(time, delta) {
    
  }

  pause(){
    this.pausemenu.openBook();
    this.player.pausePlayer();
  }
}
