const engine = Matter.Engine
const body = Matter.Body
const world = Matter.World

var engine, ball
var ground, world

function setup(){
createCanvas(400,400)

engine=Engine.create()
world=engine.world


var ground_options={
    isstatic:true
}

ground=Bodies.rectangle(250,300,200,20, ground_options)


World.add(world,ground)
}
function draw(){
    background("white")
    Engine.update(engine)
rectMode(CENTER)
rect(ground.position.x, ground.position.y, 180, 20)
}




