
var car, wall;

var speed,weight;

function setup() {
  
  createCanvas(1600,400);
  
  car = createSprite(50, 200, 50, 50);

  wall = createSprite(1500, 200, 60, height/2);


  speed = Math.round(random(55,90));

  weight = Math.round(random(400,1500));
  
  car.velocityX = speed;
  
  car.shapeColor = "white"

  wall.shapeColor = "grey"
}

function detectCollision(){

  if(wall.x-car.x<(wall.width+car.width)/2){

    car.velocityX = 0;

    var deformation = 0.5 * weight * speed * speed/22500;

    if(deformation< 100){

      car.shapeColor = "green"

    }

    if(deformation>=100&&deformation<=180){

      car.shapeColor = "yellow"
    }

    if(deformation> 180){

      car.shapeColor = "red"

    }

  }

}

function draw() {
  background(0);  
  detectCollision();
  drawSprites();
}