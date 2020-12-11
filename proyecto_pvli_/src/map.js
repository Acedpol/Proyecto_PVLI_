export default class map {
    constructor(scene){
        scene.map = scene.make.tilemap({ 
            key: 'Hogar', 
            tileWidth: 16, 
            tileHeight: 16 
        });
        const tileset = scene.map.addTilesetImage('tileset', 'tilemap');
        scene.groundLayer = scene.map.createStaticLayer("Superficie", [tileset]);
        scene.mueblesLayer = scene.map.createStaticLayer("Muebles", [tileset]);
    }
    
    create() {
        
    }
}