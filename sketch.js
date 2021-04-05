var moveRect, fixRect

function setup() {
  createCanvas(800,400);
  moveRect=createSprite(200, 200, 50, 50);
  moveRect.shapeColor= "green";
  fixRect=createSprite(400, 200, 50, 50);
  fixRect.shapeColor= "pink";
}

function draw() {
  background("black");  
  moveRect.x=mouseX;
  moveRect.y=mouseY;
  if (fixRect.x-moveRect.x<(fixRect.width/2 + moveRect.width/2)&&
  moveRect.x-fixRect.x<(fixRect.width/2 + moveRect.width/2)&&
  fixRect.y-moveRect.y<(fixRect.height/2 + moveRect.height/2)&&
  moveRect.y-fixRect.y<(fixRect.height/2 + moveRect.height/2)){
    fixRect.shapeColor= "blue";
    moveRect.shapeColor= "yellow";
  }
  else{
    moveRect.shapeColor= "green";
    fixRect.shapeColor= "pink";
  }
  drawSprites();
}