var backgroundImg,spaceship,spaceshipImg;
var form,doodle2,doodle2Img;
var monster1,monster1Img,monster2;
var monster2Img,monster3,monster3Img;
var monster4,monster4Img,monster5;
var monster5Img,monster6,monster6Img;

function preload(){

  backgroundImg = loadImage("Images/background.png");
  spaceshipImg = loadImage("Images/spaceship.png");

  doodle2Img = loadImage("Images/doodle2.png");

  monster1Img = loadImage("Images/monster1.png");
  monster2Img = loadImage("Images/monster2.png");
  monster3Img = loadImage("Images/monster3.png");
  monster4Img = loadImage("Images/monster4.png");
  monster5Img = loadImage("Images/monster5.png");
  monster6Img = loadImage("Images/monster6.png");

}

function setup(){

  createCanvas(500,700);
  
  form = new Form();

}

function draw(){

  background(backgroundImg);
  drawSprites();

  form.display();

}