
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var lightning, lightning1, lightning2, lightning3, lightning4;
var bruce, bruceImg;
var drops=[];
var umbrella;
var engine, world;
var lPos,lWidth,lheight;
var lightningTime;
function preload(){
    lightning1 = loadImage("images/thunderbolt/1.png");
    lightning2 = loadImage("images/thunderbolt/2.png");
    lightning3 = loadImage("images/thunderbolt/3.png");
    lightning4 = loadImage("images/thunderbolt/4.png");    
    bruceImg = loadAnimation("images/Walking Frame/walking_1.png", "images/Walking Frame/walking_2.png", "images/Walking Frame/walking_3.png", "images/Walking Frame/walking_4.png", "images/Walking Frame/walking_5.png", "images/Walking Frame/walking_6.png", "images/Walking Frame/walking_7.png", "images/Walking Frame/walking_8.png")
}

function setup(){
   createCanvas(500,550);
   engine = Engine.create();
   world = engine.world;

   bruce = createSprite(250,360);
   bruce.addAnimation("walking",bruceImg); 
   bruce.scale=0.5

   umbrella = new Umbrella(265,300,95);

   var maxDrops = 100;
    for(var i =0; i<maxDrops; i++){
        drops.push(new Drops(random(0,500),random(0,500)))
    }

  
}

function draw(){
    background(0);
    drawSprites();
    Engine.update(engine);

    for(var drp in drops){
        drops[drp].display();
        drops[drp].update();
    }

    
    if(frameCount % 80 === 0){
        console.log("i'm here");
        console.log(frameCount);
        lPos = random(50,450);
        lWidth = random(100,200);
        lheight = random(100,200)
        lightning = Math.round(random(1,4));
        lightningTime =frameCount;

    }

    if(frameCount - lightningTime >15){
        lightning = 0;
    }
    

        switch(lightning){
            case 1: image(lightning1,lPos,0,lWidth,lheight);
                    break;
            case 2: image(lightning2,lPos,0,lWidth,lheight);
                    break;
            case 3: image(lightning3,lPos,0,lWidth,lheight);
                    break;
            case 4: image(lightning4,lPos, 0,lWidth,lheight);
                    break;
            default: break;    
    
    }

    //umbrella.display();
}   

