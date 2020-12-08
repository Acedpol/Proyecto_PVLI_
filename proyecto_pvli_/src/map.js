export default class map {
    preload() {
        this.load.setPath('./assets/maps');
        this.load.tilemapTiledJSON('Hogar', 'Hogar.json');
        this.load.image('tilemap', 'tileset.png');
    }
    create() {
        this.map = this.make.tilemap({ 
            key: 'Hogar', 
            tileWidth: 16, 
            tileHeight: 16 
        });
        const tileset = this.map.addTilesetImage('tileset', 'tilemap');
        this.groundLayer = this.map.createStaticLayer('GroundLayer', tileset);
    }
}