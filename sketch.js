var form,game,gameState=0;
var bg,bg1,bg2;
var gargi_img,gargi;
function preload(){
bg = loadImage("Images/bg.jpg");
gargi_img = loadImage("Images/gargi1.png");
}
function setup(){
    createCanvas(displayWidth,displayHeight);
form = new Form();
game = new Game();
}
function draw(){
    if(gameState == 0){
        form.display();
    }
    else{
        clear();
game.start();
    }

drawSprites();

}