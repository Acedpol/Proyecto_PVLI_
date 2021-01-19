import botones from './botones.js';

export default class endscene extends botones{
    constructor() {
        super('endscene');
    }

    create() {
        super.create();
        const config = {
            mute:false,
            volume: 0.8,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0,
        }
        //this.sound.play('victorymusic', config);

        this.add.image(0, 0, 'menu').setOrigin(0);
        this.victorytitle = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.2, 'endtitle').setDepth(1);
        this.victorytitle.setScale(1.5, 1.5);
        this.playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, 'backmenu').setDepth(1);
        this.add.image(0, 300, 'adaptacion').setOrigin(0).setScale(0.5, 0.5);

        this.CambioEscena(this.playButton, 'menuprincipal');
    }

}