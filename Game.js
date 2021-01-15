class Game {
  constructor(){

  }

  start(){
    if(gameState === 0){
     
      
      form = new Form()
      form.display();
    }

    archer = createSprite(200,650,50,50);
    archer.addImage("Archer",archerImg)
    archer.scale = 0.25;

    redKnight = createSprite(900,600,50,50);
    redKnight.addImage("redKNight",redKnightImg)
    redKnight.scale = 0.5;

    ground = createSprite(600,750,1200,10);
    ground.visible = false;
    
  
  }

  level1(){
    form.hide();
 var text1 = "Sorry.You Lose.";
 var text2 = "Well Done.Press this button to continue.";
 var text3 = "Press k to shoot and space to jump.";

    
  
    if(keyDown("k")){
        var arrow = createSprite(200,600,50,25);
        arrow.velocityX = 5;
        arrow.lifetime = 400;
        arrow.addImage(arrowImg);
        arrow.y = archer.y ;
        arrow.scale = 0.2;
        arrowGroup.add(arrow);
      
    }
  
    if(keyDown("space")){
      archer.velocityY = -7;
     
    }
    archer.velocityY = archer.velocityY + 0.8;
    archer.collide(ground);
   
      
      if(frameCount%80 === 0){
        var obstacle = createSprite(900,650,50,25);
        obstacle.velocityX = - 10;
        obstacle.addImage(ninjaStarImg);          
        obstacle.scale = 0.08;
        obstacle.lifetime = 400;
        obstacle.y = random(550,750);
        obstacleGroup.add(obstacle);
       
    }
     
      if(arrowGroup.isTouching(redKnight)){
          redKnightHealth = redKnightHealth - 20;
          arrowGroup.destroyEach();
      }
      if(obstacleGroup.isTouching(archer)){
        console.log("hello");
        archerHealth = archerHealth - 25;
        obstacleGroup.destroyEach();
      }
      if(archerHealth === 0){
        archer.destroy();
        redKnight.destroy();
        obstacleGroup.destroyEach();
        arrowGroup.destroyEach();
       // text("Sorry.You Lose.",600,300)
      //  this.restart.display();
      }
      if(redKnightHealth === 0){
        archer.destroy();
        redKnight.destroy();
        obstacleGroup.destroyEach();
        arrowGroup.destroyEach();
     //   text("Well Done.Press this button to continue.",600,300)
       // this.startLevel2.display();
      }

    drawSprites();
    textSize(30);
    noStroke();
    fill("red");
    text("Enemy's Health:" + redKnightHealth,800,200);
    text("Your Health:" + archerHealth,400,200);
    if(redKnightHealth === 0){
      text(text2,550,400);
    }
   else if (archerHealth === 0){
     text(text1,550,400);
   }
    else{
      text(text3,550,400);
    }
    
    }
    end(){
    this.restart.display();



       
    }
  }




 


