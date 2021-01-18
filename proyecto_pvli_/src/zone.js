//export default class zone extends Phaser.GameObjects.Sprite {
export default class zone extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y, texture, h, dir, enemy) {
        super(scene.matter.world,x, y, texture, h,dir, 0);
       
        //this.setOrigin(0,0);
        this.setScale(0.5,0.3);
        this.setPolygon(100,3);
        //this.body.setScale(this.width,this.height);
        // console.log(this.body);
        this.setStatic(true);
        this.dir=dir;
        this.enemType = enemy;
        if(this.dir == 0) {
            //this.body.angle=30;
            this.angle=0;
        }
        else if(this.dir == 1) {
        // this.body.angle=225;
           this.angle=180;
        }
        else if(this.dir == 2) {
            //this.body.angle=135;
            this.angle=90;
        }
        else if(this.dir == 3) {
            //this.body.angle=315;
            this.angle=270;
        }
        // this.scene.physics.add.existing(this);
        //this.scene.matter.add.existing(this);
        this.setDepth(-1);
        this.body.angle=30-0.27;
        console.log(this);
        console.log(this.body);
      
        // this.body.angle=this.angle;
        /* this.shape = this.scene.cache.json.get('zonePhy');*/
        this.scene.add.existing(this);
    }

    preUpdate() {
       // this.scene.matter.add.image(100,100,'zone');
        this.changeAngle();
        this.move();
        this.updateBody();
    }

    move() {
        this.x=this.scene.enemies.getChildren()[this.enemType].x;
        this.y=this.scene.enemies.getChildren()[this.enemType].y+(this.scene.enemies.getChildren()[0].height/2); 
    }

    changeAngle() {
       if(this.scene.enemies.getChildren()[this.enemType].dir == 0) {
           // this.body.angle=45;
            this.angle = 0;
        }
        else if(this.scene.enemies.getChildren()[this.enemType].dir == 1) {
            //this.body.angle=225;
            this.angle = 180;
        }
        else if(this.scene.enemies.getChildren()[this.enemType].dir == 2) {
           // this.body.angle=135;
            this.angle = 90;
        }
        else if(this.scene.enemies.getChildren()[this.enemType].dir == 3) {
            //this.body.angle=315;
            this.angle = 270;
        }
    }

    updateBody() {
        this.body.width = this.width;
        this.body.height = this.height;
        this.body.x = this.x;
        this.body.y = this.y;
        //this.body.angle=this.angle;
    }
}