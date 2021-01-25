var backGround , backgroundImg;
var tom , tomImg , tomImg2 , jerry , jerryImg , jerryImg2;
var jerryCollided , tomCollided;

function preload() {
    //load the images here
    backgroundImg = loadImage("garden.png");
    tomImg = loadImage("tomOne.png");
    tomImg2 = loadAnimation("tomTwo.png","tomThree.png");
    tomCollided = loadImage("tomFour.png");
    jerryImg = loadImage("jerryOne.png");
    jerryImg2 = loadAnimation("jerryTwo.png","jerryThree.png");
    jerryCollided = loadImage("jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    backGround = createSprite(0,0,1000,800);
    backGround.addImage(backgroundImg);
    backGround.scale = 2.5;
  
    tom = createSprite(880 , 600 , 10 , 10);
    tom.addImage(tomImg);
    tom.scale = 0.2;
  
    jerry = createSprite(80 , 600 , 10 , 10);
    jerry.addImage(jerryImg);
    jerry.scale = 0.2;
    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
  
if(tom.x - jerry.x < (tom.width - jerry.width)/2){
    tom.addAnimation("tomLastImage",tomCollided);
    tom.changeAnimation("tomLastImage");
jerry.addAnimation("jerryLastImage",jerryCollided);
    jerry.changeAnimation("jerryLastImage");
    tom.velocityX = 0;
  }
  
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  
  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("tomRunning",tomImg2);
    tom.changeAnimation("tomRunning");
    jerry.addAnimation("jerrywalking",jerryImg2);
    jerry.changeAnimation("jerrywalking");
  }

}
