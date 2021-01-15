class Form {

  constructor() {
    this.inputName = createInput("Name");
    this.inputClan = createInput("Clan Name")
    this.inputEmpire = createInput("Empire Name")
    this.button = createButton('Play');
    this.title = createElement('h2');
    this.greeting = createElement ('h2');
    this.instruction = createElement('h2');
    this.startLevel1 = createButton('Next');
    this.startLevel2 = createButton('Next');
    this.restart = createButton('Restart');
  }
  hide(){
    this.button.hide();
    this.inputName.hide();
    this.inputEmpire.hide();
    this.inputClan.hide();
    this.title.hide();
    this.instruction.hide();
    this.startLevel1.hide();
    this.startLevel2.hide();
    }

  display(){
    this.title.html("Welcome to KLINGON:THE DARK FORCE");
    this.title.position(50, 50);
    this.title.style('font-size', '50px');
    this.title.style('color', 'skyblue');
    this.inputName.position(550,300)
    this.inputClan.position(550,400 );
    this.inputEmpire.position(550,500);
    this.button.position(560,600);
    this.button.style('width', '200px');
    this.button.style('height', '40px');
    this.button.style('background', 'lightpink');
    


    this.button.mousePressed(()=>{
      this.inputName.hide();
      this.inputClan.hide();
      this.inputEmpire.hide();
      this.button.hide();
      this.title.hide();
      var playerName = this.inputName.value();
      var clanName = this.inputClan.value();
      var empireName = this.inputEmpire.value();
      this.greeting.html(playerName + " of " + clanName + " with " + empireName)
      this.greeting.position(400,25); 
      this.greeting.style('color', 'green');
      this.greeting.style('font-size', '25px');

      this.instruction.html("KLINGON: The Dark Force is a game testing your skill in strategy and warfare. In this game you  have to cross the 2 levels of the game by defeating dangerous opponents. The first level is to defeat the red knight using arrows from your archer and the second level is to defeat the witch using an army and your empire.Good Luck!")
      this.instruction.position(5,400); 
      this.instruction.style('color', 'green');
      this.instruction.style('font-size', '25px');
      
      this.startLevel1.position(560,600);
      this.startLevel1.style('width', '200px');
      this.startLevel1.style('height', '40px');
      this.startLevel1.style('background', 'lightpink');
   
      this.startLevel1.mousePressed(()=>{
        this.startLevel1.hide();
        this.instruction.hide();

        gameState = 1;


      });
     /* this.startLevel2.position(560,600);
      this.startLevel2.style('width', '200px');
      this.startLevel2.style('height', '40px');
      this.startLevel2.style('background', 'lightpink');
   
      this.startLevel2.mousePressed(()=>{
        this.startLevel2.hide();
       // text.hide();
       
        gameState = 2;


      });*/
      if(gameState === 1 && (archerHealth === 0 || redKnightHealth === 0)){
        this.restart.position(560,600);
        this.restart.style('width', '200px');
        this.restart.style('height', '40px');
        this.restart.style('background', 'lightpink');
     
      }
      this.restart.mousePressed(()=>{
        redKnightHealth = 100;
        archerHealth = 100;
        archer = createSprite(200,650,50,50);
        archer.addImage("Archer",archerImg)
        archer.scale = 0.25;
    
        redKnight = createSprite(900,600,50,50);
        redKnight.addImage("redKNight",redKnightImg)
        redKnight.scale = 0.5;
    
        ground = createSprite(600,750,1200,10);
        ground.visible = false;
        
             

        gameState = 1;
      });


     
      
 
  


     
    
  });
    
  }
}
