class bootloader extends Phaser.Scene {
    constructor() {
        super({ key:"bootloader" }); 
    }

    preload() {
        console.log('Bootloader');
        this.load.setPath('./assets/images');

        this.load.image('burro', 'Platero.png');
        this.load.image('live','live.png');
        this.load.image('libro', 'book.png');

        this.load.spritesheet("player", 'PlayerSheet.png', {frameWidth: 47, frameHeight: 42 });
        
        this.load.on('complete', () => {
            console.log('Load complete');
        });
    }

    create() { 
        this.anims.create({
            key: 'standby',
            frameRate: 1,
            frames: this.anims.generateFrameNumbers("player", {
                start: 0,
                end: 0
            })
            });
        this.anims.create({
            key: 'left',
            frameRate: 3,
            frames: this.anims.generateFrameNumbers("player", {
                start: 3,
                end: 5
            })
            });
        this.anims.create({
            key: 'right',
            frameRate: 3,
            frames: this.anims.generateFrameNumbers("player", {
                start: 6,
                end: 8
            })
            });
        this.anims.create({
            key: 'down',
            frameRate: 3,
            frames: this.anims.generateFrameNumbers("player", {
                start: 0,
                end: 2
            })
            });
        this.anims.create({
            key: 'up',
            frameRate: 3,
            frames: this.anims.generateFrameNumbers("player", {
                start: 9,
                end: 11
            })
            });
        this.scene.start('game');
    }
}
export default bootloader;