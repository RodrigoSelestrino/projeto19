var foguete 
var parede1
var parede2
var fogueteimage
var ceu
var ceuimage


function preload(){
 fogueteimage = loadImage("nave.png")
 ceuimage = loadImage("ceu.png")


}

function setup() {
 createCanvas(500,600)
 ceu = createSprite(250,300)
 ceu.addImage(ceuimage)
 ceu.velocityY = 2

 foguete = createSprite(250,400)
 parede1 = createSprite(1,300,20,600)
parede2 = createSprite(499,300,20,600)
foguete.addImage(fogueteimage)
foguete.scale= 0.2


}

function draw() {
 background("black")
 drawSprites()
if (keyDown("a")){
 foguete.x = foguete.x -6

 } 
 if (keyDown("d")){
 foguete.x = foguete .x + 6
 

}
foguete.collide(parede1)
foguete.collide(parede2)
if (ceu.y>400){
ceu.y = ceu.height/2
    
}
}