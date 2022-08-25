var car1, car2, car3,car4;
var player;
var wall1, wall2;
var linha1, linha2;

function preload(){

}

function setup(){
    createCanvas(500,500);
    wall1 = createSprite(250,150,500,5);
    wall2 = createSprite(250,350,500,5);

    linha1 = createSprite(25,250,50,200);
    linha1.shapeColor = "orange";
    linha2 = createSprite(475,250,50,200);
    linha2.shapeColor = "gold";

    player = createSprite(25,250,20,20);
    player.shapeColor = "blue";

    car1 = createSprite(150,170,20,20);
    car1.shapeColor = "red";
    car1.velocityY = 4;

    car2 = createSprite(300,170,20,20);
    car2.shapeColor = "red";
    car2.velocityY = 4;

    car3 = createSprite(200,330,20,20);
    car3.shapeColor = "red";
    car3.velocityY = -4;

    car4 = createSprite(350,330,20,20);
    car4.shapeColor = "red";
    car4.velocityY = -4;
    
}

function draw(){
    background("lightblue");

   car1.bounceOff(wall1);
   car1.bounceOff(wall2);

   car2.bounceOff(wall1);
   car2.bounceOff(wall2);

   car3.bounceOff(wall1);
   car3.bounceOff(wall2);

   car4.bounceOff(wall1);
   car4.bounceOff(wall2);

   if(keyDown("right")){
    player.x = player.x +5;
   }

   if(player.bounceOff(car1)||player.bounceOff(car1)||player.bounceOff(car2)||player.bounceOff(car3)||player.bounceOff(car4)){
    player.x = 25;
    player.y = 250;
    player.velocityY = 0;
    player.velocityX = 0;
   }


    drawSprites();
}