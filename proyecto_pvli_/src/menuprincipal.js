import botones from './botones.js';

export default class menuprincipal extends botones{
    constructor(){
        super('menuprincipal');
    }

create(){

    const config = {
        mute:false,
        volume: 1,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: true,
        delay: 0,
    }
    this.sound.play('menumusic', config);

    this.add.image(0, 0, 'menu').setOrigin(0);
    this.title = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.2, 'title').setDepth(1);
    this.title.setScale(1.5, 1.5);
    this.playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, 'playButton').setDepth(1);
    this.volumeButton = this.add.image(this.game.renderer.width - 200, (this.game.renderer.height / 2) * 1.75, 'volume').setDepth(1);

    this.CambioEscena(this.playButton, 'menu');
    this.BotonVolumen(this.volumeButton, 1);
}

}