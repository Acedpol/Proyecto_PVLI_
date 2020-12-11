export default class map {
    constructor(scene, layer1, layer2, keyMap, tileMap){
        this.map = scene.make.tilemap({ 
            key: keyMap, 
            tileWidth: 16, 
            tileHeight: 16 
        });
    const tileset = this.map.addTilesetImage('tileset', tileMap);
    this.groundLayer = this.map.createStaticLayer(layer1, [tileset]);
    this.immovableLayer = this.map.createStaticLayer(layer2, [tileset]);    
    
    this.groundLayer.setCollisionByProperty({collides : true})
    }
    
    
}