class Log{

constructor(){

var option = {

isStatic : true

}

this.bodyR = Bodies.rectangle(685,400,20,200, option)
this.widthR = 20
this.heightR = 200
World.add(world, this.bodyR)

this.bodyL = Bodies.rectangle(515,400,20,200, option)
this.widthL = 20
this.heightL = 200
World.add(world, this.bodyL)

this.bodyB = Bodies.rectangle(600,490,150,20, option)
this.image = loadImage("Sprites/dustbingreen.png")
this.widthB = 150
this.heightB = 20
World.add(world, this.bodyB)
}

display(){

var posL = this.bodyL.position
rectMode(CENTER);
fill(255)
rect(posL.x, posL.y, this.widthL, this.heightL)

var posR = this.bodyR.position
rectMode(CENTER);
fill(255)
rect(posR.x, posR.y, this.widthL, this.heightL)

var posB = this.bodyB.position
    push();
    translate(posB.x,posB.y)
    imageMode(CENTER)
    image(this.image,0,-100,200,220)
    pop();

}
}