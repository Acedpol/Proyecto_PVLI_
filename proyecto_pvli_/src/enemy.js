import zone from './zone.js';
export default class enemy extends Phaser.GameObjects.Sprite {
    //dir=0->Abajo, dir=1->Arriba, dir=2->Izquierda, dir=3->Derecha
    //typeMov=0->horizontal, typeMov=1->vertical
    constructor(scene, x, y, texture,dir,dist,typeMov, enemycount) {
        super(scene, x, y, texture,dir,dist,typeMov, 0);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.setImmovable();
        this.body.setCollideWorldBounds();
        this.speed = 1;
        this.area = 200;
        this.pause = false;
        this.dir = dir;
        this.dist = dist;
        if(typeMov == 0 && dist > 0) {
            this.distMax = this.x + (dist / 2);
            this.distMin = this.x - (dist / 2);
        }
        else if(typeMov == 1 && dist > 0) {
            this.distMax = this.y + (dist / 2);
            this.distMin = this.y - (dist / 2);
        }
        this.typeMov = typeMov;
        this.x = x;
        this.y = y;

        this.scene.zones.getChildren()[enemycount] = new zone(this.scene, x,  y, 'zone', 100, this.dir, enemycount);
        this.scene.zones.getChildren()[enemycount].setCollisionCategory(this.scene.cat1);

        //this.zones.getChildren()[0].setPolygon(3,0);
        /*this.zones = this.scene.physics.add.group({key:'zone', frameQuantity: 0});
        this.zones.getChildren()[0] = new zone(this.scene,this,this.x,this.y, 'zone');*/

        //this.zone=new zone(this.scene,this,this.x,this.y, this.texture2);

        //this.scene.physics.add.overlap(this.scene.player,this.zones,this.quitaVida());
    }

    preUpdate(time,delta) {
        if(!this.pause){
            //this.quitaVida();
            this.changeDirection();
            this.move();
            //console.log(this.scene.player.health);
        }
    }
    
    changeDirection() {
        if((this.typeMov == 0 && (this.x == this.distMax || this.x == this.distMin)) 
            || (this.typeMov == 1 && (this.y == this.distMax || this.y == this.distMin)))
            {
                this.speed = -this.speed;
                if(this.dir == 0) {
                    this.dir = 1;
                }
                else if(this.dir == 1) {
                    this.dir=0;
                }
                else if(this.dir == 2) {
                    this.dir=3;
                }
                else if(this.dir==3){
                    this.dir=2;
                }
            }
        }

    move() {
        if(this.dist > 0) {
            if(this.typeMov == 0) {
                this.x=this.x + this.speed;
            }
            else { this.y = this.y + this.speed; }
        }
    }

    /*
    quitaVida(){
        if(this.dir == 0) {
            if(!this.pause && this.scene.player.y < this.y + this.area && this.scene.player.y > this.y && this.scene.player.x > this.x-5&&this.scene.player.x<this.x+5){
                this.scene.player.health--;
            }
        }
        else if(this.dir == 1) {
          if(!this.pause && this.scene.player.y>this.y-this.area && this.scene.player.y<this.y && this.scene.player.x>this.x-5&&this.scene.player.x<this.x+5){
            this.scene.player.health--;
           }
        }
        else if(this.dir==2){
          if(!this.pause && this.scene.player.x>this.x-this.area && this.scene.player.x<this.x && this.scene.player.y>this.y-5&&this.scene.player.y<this.y+5){
            this.scene.player.health--;
           }
        }
        else if(this.dir==3){
          if(!this.pause &&this.scene.player.x<this.x+this.area && this.scene.player.x>this.x && this.scene.player.y>this.y-5&&this.scene.player.y<this.y+5){
            this.scene.player.health--;
           }
        }
        this.scene.player.health--;
      }
      */
    
    
    pauseEnemy() {
        this.pause = !this.pause;
    }
}