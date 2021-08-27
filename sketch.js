const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var oreo
var apple
var spikes
var ground
var goldenFruit

function preload(){
oreo = loadImage("./assets/kangaroo.png")
ground = loadImage("./assets/gameGround.png")
spikes = loadImage("./assets/spike.png")



}

function setup(){
  createCanvas(800,800)

  oreo = createSprite(400,750,20,20)

}


function draw(){



  drawSprites();
}