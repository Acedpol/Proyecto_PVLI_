class Bootloader extends Phaser.Scene {
    constructor() {
        super({ key:"Bootloader" }); 
    }

    preload() {
        console.log('Bootloader');
        this.load.setPath('./assets/images');

        this.load.image('burro', 'Platero.png');

        this.load.image('player', 'Player.png'); //{frameWidth: 12, frameHeight: 17, end: 12});

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

        this.scene.start('Game');
    }
}
export default Bootloader;