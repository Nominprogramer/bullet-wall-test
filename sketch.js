let bullet,wall;
let thickness,speed,weight;

function setup() {
  createCanvas(800,400);
  thickness = Math.round(random(22,83));
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  bullet = createSprite(100, 200, 50, 10);
  wall = createSprite(750,200,thickness,200);
  bullet.velocityX = speed;
}

function draw() {
  background("white");


  if(collisonS(bullet,wall))
  {
    bullet.velocityX=0;
    let damage=0.5 * weight * speed*speed/(thickness *thickness *thickness);


    if(damage>10)
     {
       wall.shapeColor=color(255,0,0);

     }

     if(damage<10)
     {
       wall.shapeColor=color(0,255,0);
     }
  }


  
  drawSprites();
  
  collisonS(bullet,wall);
}

function collisonS(o1,o2){
  bulletRightEdge=o1.x+o1.width;
  wallLeftEdge=o2.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }  
  return false;
}