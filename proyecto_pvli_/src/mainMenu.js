export default class mainMenu extends Phaser.Scene{
    constructor(){
        super({key: 'mainMenu'});
    }

create(){
    this.add.image(0, 0, 'menu').setOrigin(0);
    this.title = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.2, 'title').setDepth(1);
    this.title.setScale(1.5, 1.5);
    this.playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, 'playButton').setDepth(1);
    this.optionsButton = this.add.image(this.game.renderer.width / 2, (this.game.renderer.height / 2) * 1.5, 'options').setDepth(1);

    this.CrearBoton(this.playButton);
    this.playButton.on("pointerdown", () => {
        this.scene.start('menu');
    })

    /*this.CrearBoton(this.optionsButton);
    this.optionsButton.on("pointerdown", () => {
        this.scene.start()
    })*/

}

    CrearBoton(button){
        button.setInteractive();
        button.on("pointerover", () => {
            button.setScale(1.25, 1.25);
        })
        button.on("pointerout", () =>{
            button.setScale(1, 1);
        })
        
        return button;
    }
}