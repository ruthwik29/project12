var path,boy,boy_walking
var pathimg
var boyimg
var bombimg
var coinimg
var leftboundary
var rightboundary
function preload() {
    pathimg=loadImage("path.png")
        boyimg=loadAnimation("Runner-1.png","Runner-2.png")
}
function setup() {
    createCanvas(400,400)
    
    path=createSprite(200,200)
        path.addImage(pathimg)
        path.scale=1.2
        path.velocityY=4        
    boy=createSprite(200,340,20,20)
    boy.addAnimation("boy_running",boyimg) 
    boy.scale=0.05
     leftboundary=createSprite(0,0,100,800)
     leftboundary.visible=false      
     rightboundary=createSprite(410,0,100,800)
     rightboundary.visible=false   
}

function draw() {
    background("white")
    if(path.y>400){
    path.y=height/2
    }
    path.velocityY=4 
    
        boy.x=World.mouseX
        boy.collide(leftboundary)
        boy.collide(rightboundary)
        drawSprites()
     
}   

