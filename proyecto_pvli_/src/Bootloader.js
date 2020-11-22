class Bootloader extends Phaser.Scene {
    constructor() {
        super({ key:"Bootloader" }); 
    }

    preload() {
        console.log('Bootloader');
        this.load.setPath('./assets/images');

        this.load.image('burro', 'Platero.png');

        this.load.on('complete', () => {
            console.log('Load complete');
        });
    }

    create() {
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'burro');
        this.add.text((this.scale.width / 3 + 125), this.scale.height / 3, "¡Hola, Soy Platero!", { fontColor: 0x76C9F0 });
    }
}
export default Bootloader;