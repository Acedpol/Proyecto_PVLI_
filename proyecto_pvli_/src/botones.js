export default class botones extends Phaser.Scene{
    constructor(scenekey){
        super({key: scenekey});
    }

    create(){
        this.buttonpress = this.sound.add('buttonpress', {mute: false, volume: 1.25, loop: false});
    }
    
    CrearBoton(button){
        this.cameras.main.fadeIn(1250);
        button.setInteractive();
        button.on("pointerover", () => {
            button.setScale(1.25, 1.25);
        })
        button.on("pointerout", () =>{
            button.setScale(1, 1);
        })
        
        return button;
    }

    CambioEscena(button, scenename){
        this.CrearBoton(button);
        button.on("pointerdown", () => {
            this.buttonpress.play();
            setTimeout(() => {
                this.scene.start(scenename);
            }, 1000);
        });

        return button;
    }

    Return(button, scenename){
        this.CrearBoton(button);
        button.on("pointerdown", () => {
            this.scene.stop();
            this.scene.run(scenename);
        })

        return button;
    }

    BotonVolumen(button, volumen){
        button.setInteractive();
        button.on("pointerdown", () => {
            this.buttonpress.play();
            this.sound.setVolume(volumen);

            if(volumen > 0) volumen -= 0.2;
            else {
                volumen = 1;
                this.sound.setVolume(volumen);
                volumen -= 0.2;
            }
            
            button.setScale(0.5 + volumen, 0.5 + volumen);
        })

        return button;
    }
}