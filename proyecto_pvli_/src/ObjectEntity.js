import game from './game.js';
export default class ObjectEntity extends Phaser.GameObjects.Sprite {
    constructor(scene, layer, num) {
        super(scene, 0, 0);
        var npc = scene.map.objects[layer][num];
        this.id = npc.id;
        this.name = npc.name;
        this.rotation = npc.rotation;
        this.type = npc.type;
        this.visible = npc.visible;
        this.height = npc.height;
        this.width = npc.width;
        this.x = npc.x;
        this.y = npc.y;
    }
}

























// constructor(id, name, rotation, type, visible, height, width, x, y) {
    //     this.id = id;
    //     this.name = name;
    //     this.rotation = rotation;
    //     this.type = type;
    //     this.visible = visible;
    //     this.height = height;
    //     this.width = width;
    //     this.x = x;
    //     this.y = y;
    // }