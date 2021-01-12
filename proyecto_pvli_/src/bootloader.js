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
        this.load.image('controles', 'controls.png');
        this.load.image('zone', 'zone.png');

        this.load.spritesheet("player", 'PlayerSheet.png', {frameWidth: 47, frameHeight: 42 });
        this.load.spritesheet("enemy", 'EnemySheet.png', {frameWidth: 47, frameHeight: 42 });
        this.load.spritesheet('items', 'Items.png', {frameWidth: 16, frameHeight: 16});

        this.load.setPath('./assets/maps/hogar');
        this.load.tilemapTiledJSON('Hogar', 'Hogar.json');
        this.load.image('tilemapmenu', 'tileset2.png');

        this.load.setPath('./assets/maps/nivel_01');
        this.load.tilemapTiledJSON('Nivel', 'Nivel.json');
        this.load.image('tilemap', 'tileset3.png');
        this.load.image('ambiente', 'ambiente-extruded.png');
        
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
        this.scene.start('menu');
    }
}
export default bootloader;