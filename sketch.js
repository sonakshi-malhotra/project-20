var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
  wallColor=(80,80,80)
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  car.collide(wall)
  if(deformation=0.5*weight*speed*speed/22500){
      car.shapeColor="pink"
      wall.shapeColor="blue"
    }  
    else{
     if(deformation<100){
       car.shapeColor=colour(0,255,0)
     }
     else if(deformation=random(100,180) ){
      car.shapeColour=colour(230,230,0)
     }
     if(deformation>180){
       car.shapeColor=colour(255,0,0)
     }
        
    }
  drawSprites();
 } 