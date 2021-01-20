//export default class zone extends Phaser.GameObjects.Sprite {
export default class zone extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y, texture, h, dir, enemy) {
        super(scene.matter.world,x, y, texture, h,dir, 0);
        
        this.polygonsize = 100;

        //this.setOrigin(0,0);
        this.setScale(1.7, 1.7);
        this.setAlpha(0.6);
        this.setPolygon(this.polygonsize,3);
        //this.body.setScale(this.width,this.height);
        // console.log(this.body);
        this.setStatic(true);
        this.dir=dir;
        this.enemType = enemy;
        
        // this.scene.physics.add.existing(this);
        //this.scene.matter.add.existing(this);
        this.setDepth(-1);
        
        this.body.angle= -1.5708; //90 grados en radianes
        /* this.shape = this.scene.cache.json.get('zonePhy');*/
        this.scene.add.existing(this);
    }

    preUpdate() {
       // this.scene.matter.add.image(100,100,'zone');
        if(!this.scene.enemies.getChildren()[this.enemType].pause){
            this.changeAngle();
            this.move();
        }
    }

    move() {
        this.mainenemy = this.scene.enemies.getChildren()[this.enemType];
        switch(this.mainenemy.typeMov){
            case 0:
                if(this.mainenemy.dir === 3){
                this.x=this.mainenemy.x - this.polygonsize/2 - this.mainenemy.width;
                this.y=this.mainenemy.y;
                }
                else if(this.mainenemy.dir === 2){
                this.x=this.mainenemy.x + this.polygonsize/2 + this.mainenemy.width;
                this.y=this.mainenemy.y;
                }
            break; 
            case 1:
                if(this.mainenemy.dir === 0){
                    this.x=this.mainenemy.x;
                    this.y=this.mainenemy.y + this.polygonsize/2 + this.mainenemy.height;
                }
                else if(this.mainenemy.dir === 1){
                    this.x=this.mainenemy.x;
                    this.y=this.mainenemy.y - this.polygonsize/2 - this.mainenemy.height;
                }
        }
    }

    changeAngle() {
        this.enemydir = this.scene.enemies.getChildren()[this.enemType].dir;
        if(this.enemydir == 0) {
           // this.body.angle=45;
            this.angle = 0;
        }
        else if(this.enemydir == 1) {
            //this.body.angle=225;
            this.angle = 180;
        }
        else if(this.enemydir == 2) {
           // this.body.angle=135;
            this.angle = 270;
        }
        else if(this.enemydir == 3) {
            //this.body.angle=315;
            this.angle = 90;
        }
    }
}