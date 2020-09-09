var bullet,wall;
var speed,weight,damage,thickness; 

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet =createSprite(50,200,50,20);
  wall=createSprite(1500,200,thickness,height/2);
    wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;
  wall.shapeColor=(80,80,80);
  damage=0;
}

function draw() 
{
  background(255,255,255);  

  if(bullet.isTouching(wall)){
      damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
      bullet.velocityX=0;
  

  if (damage>10){
    wall.shapeColor=color(0,255,0);
    console.log(damage);
  }

  if(damage<10){
    wall.shapeColor=color(255,0,0);
    console.log(damage);
  }
}
  drawSprites();
}