class bootloader extends Phaser.Scene {
    constructor() {
        super({ key:"bootloader" }); 
    }

    preload() {
        console.log('Bootloader');
        this.load.setPath('./assets/images');

        this.load.image('burro', 'Platero.png');

        this.load.spritesheet('player', 'Player.png', {frameWidth: 48, frameHeight: 48, end: 12});

        this.load.on('complete', () => {
            console.log('Load complete');
        });
    }

    create() { 
        this.anims.create({
            key: 'left',
            frameRate: 10,
            frame: this.anims.generateFrameNumbers('player', {
                start: 4,
                end: 6
            })
            });
        this.anims.create({
            key: 'right',
            frameRate: 10,
            frame: this.anims.generateFrameNumbers('player', {
                start: 7,
                end: 9
            })
            });
        this.anims.create({
            key: 'down',
            frameRate: 10,
            frame: this.anims.generateFrameNumbers('player', {
                start: 0,
                end: 3
            })
            });
        this.anims.create({
            key: 'up',
            frameRate: 10,
            frame: this.anims.generateFrameNumbers('player', {
                start: 10,
                end: 12
            })
            });

        this.scene.start('game');
    }
}
export default bootloader;