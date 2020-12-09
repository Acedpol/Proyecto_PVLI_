export default class map {
    preload() {
        this.load.tilemapTiledJSON('tilemap', 'hogar.json');
        this.load.image('patronesTilemap', 'images/patrones.png');
    }
    create() {
        this.map = this.make.tilemap({ 
            key: 'tilemap', 
            tileWidth: 16, 
            tileHeight: 16 
          });
          const tileset1 = this.map.addTilesetImage('patrones', 'idImagen');
          const tileset2 = this.map.addTilesetImage('patronesFondo', 'idImagen2');
          // tileset1, tileset2 han sido creados con `addTilesetImage`
        this.backgroundLayer = 
        this.map.createStaticLayer('BackgroundLayer', [tileset1, tileset2]);
                           
        // funciona con y sin array
        this.groundLayer = 
        this.map.createStaticLayer('GroundLayer', tileset1);
                           
        this.foreground = 
        this.map.createStaticLayer('Foreground', [tileset1, tileset2]);

        // con el ID de objeto
        player = map.createFromObjects('nombreDeCapaObjotesEnTiled', 1)

        // o con el nombre del objeto (`name` en Tiled)
        player = map.createFromObjects('nombreDeCapaObjotesEnTiled', 'player')

        // cambiar las propiedades de player después
        player.vida = 10        
        
        // para cogerlos a mano
        this.mapa.getObjectLayer('capaObjetos').objects

        // En Tiled tiene que haber una capa de objetos llamada `capaObjetos`
        for (const objeto of scene.mapa.getObjectLayer('capaObjetos').objects) {
            // `objeto.name` u `objeto.type` nos llegan de las propiedades del
            // objeto en Tiled
            if (objeto.type === 'player') {
                const jugador = new Player(scene, objeto.x, objeto.y)
                for (const { name, value } of objeto.properties) {
                    jugador[name] = value 
                }
            }
        }

        function cargar(mapa, capa, tipo, cb) {
            const objetos = mapa.getObjectLayer(capa).objects.filter(x => x.type === tipo)
            for (const objeto of objetos) {
                const props = {}
                if (objeto.properties) {
                    for (const { name, value } of objeto.properties) {
                        props[name] = value
                    }
                }
                cb({ x: objeto.x, y: objeto.y, props })
            }
        }

        cargar(this.mapa, 'objetos', 'player', ({ x, y, props }) => {
            this.player = new Player(this, x, y)
            this.player.vida = props.vida
        })
    }
}