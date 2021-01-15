var canvas, backgroundImage
var arrowGroup, obstacleGroup;

var gameState =0;
var coins = 1000;

var form, player, game,ground;

var archer, redKnight,witch;

var archerImg,redKnightImg,witchImg,arrowImg
var archerHealth = 100;
 var redKnightHealth = 100;

function preload(){
  backgroundImg = loadImage("images/Background.jpg");
  archerImg = loadImage("images/Archer.png");
  redKnightImg = loadImage("images/Dark Knight.png");
  witchImg = loadImage("images/witch.jpg");
  arrowImg = loadImage("images/arrow bow.png");
  ninjaStarImg = loadImage("images/ninja star.png");
}

function setup(){
  canvas = createCanvas(1200, 800);
  game = new Game();
  game.start();
  arrowGroup = createGroup();
  obstacleGroup = createGroup();

  
}


function draw(){
  background(backgroundImg)
  if(gameState === 1){
    game.level1();
  
  }
  
  if(gameState === 2){
    game.end();
  }
}
