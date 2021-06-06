var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="green";
  movingRect=createSprite(400,200,80,50);
  movingRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect.debug=true;
  gameObject1 = createSprite(500, 200, 50, 80);
  gameObject1.shapeColor="green";
  gameObject2 = createSprite(600, 200, 50, 80);
  gameObject2.shapeColor="green";
  gameObject3 = createSprite(700, 200, 50, 80);
  gameObject3.shapeColor="green";
  gameObject4 = createSprite(800, 200, 50, 80);
  gameObject4.shapeColor="green";
  fixedRect.velocityX=5;
  gameObject1.velocityX=-5;
}

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x);
  
  if (isTouching(movingRect, gameObject4)) {
    movingRect.shapeColor="red";
    gameObject4.shapeColor="red";
  }
  else {
    movingRect.shapeColor="green";
    gameObject4.shapeColor="green";
  }
  bounceOff(fixedRect, gameObject1);
  drawSprites();
}
