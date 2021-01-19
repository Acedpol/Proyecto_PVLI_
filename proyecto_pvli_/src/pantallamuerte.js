import botones from './botones.js';

export default class pantallamuerte extends botones{
    constructor() {
        super('pantallamuerte');
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
        this.losstitle = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.2, 'losstitle').setDepth(1);
        this.losstitle.setScale(1.5, 1.5);
        this.backtomenu = this.add.image(2*this.game.renderer.width / 4, this.game.renderer.height / 2, 'backmenu').setDepth(1);
        this.retry = this.add.image(3*this.game.renderer.width / 4, this.game.renderer.height / 2, 'retry').setDepth(1);
        //this.add.image(0, 300, 'adaptacion').setOrigin(0).setScale(0.5, 0.5);

        this.CambioEscena(this.backtomenu, 'menuprincipal');
        this.CambioEscena(this.retry, 'menu');
    }
}

