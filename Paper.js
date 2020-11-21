class Paper{

constructor(x,y){

var options = {

restitution:0.3,
friction:0.5,
density:1.0
}

this.body = Bodies.circle(x, y, 55, options)
this.image = loadImage("sprites/paper.png");
World.add(world, this.body)



}

display(){
    var pos = this.body.position
    push();
    translate(pos.x,pos.y)
    imageMode(CENTER)
    image(this.image,0,0,55,55)
    pop();
}

}