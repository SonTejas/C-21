var fixedRect, movingRect;
var gameObject1,gameObject2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600, 400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  gameObject1 = createSprite(400,400,80,40);
  gameObject1.shapeColor = "blue";

  movingRect.velocityX = -5;
  gameObject1.velocityX = +5;
}

function draw() {
  background(0,0,0);  
  bounceoff(movingRect,gameObject1);
  
  drawSprites();
}

