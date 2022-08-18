// Starting Position for Ball
let xPos = 12.5
let yPos = 487.5
let w = 25
let h = 25
// Creating the Canvas and background
function setup (){
    createCanvas (500, 500);
    noStroke()
    wall = new Wall(100,200,100,10);
    wall2 = new Wall(20,20,5,5);
    wallArray = [wall,wall2]
}
let wall;
let wall2;
let width,height;
let wallArray;
function draw () {
    // Background Color
    background(0,0,0);
    // Create Ball
    fill(255, 0, 0);
    ellipse(xPos, yPos, 25, 25);
    //Moving up, down, left and right:
    if (keyIsDown(LEFT_ARROW)) {
        xPos -= 2;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        xPos += 2;
    }
    if (keyIsDown(UP_ARROW)) {
        yPos -= 2;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yPos += 2;
    }
    // // Setting Boundaries
    // if (xPos < 12.5) {
    //     xPos = 12.5
    // }
    // if (yPos < 12.5) {
    //     yPos = 12.5
    // }
    // if (xPos > 487.5) {
    //     xPos = 487.5
    // }
    // if (yPos > 487.5) {
    //     yPos = 487.5
    // }
    // //Creating walls (oop)
    fill(255);
    for(let i = 0; i < wallArray.length; i++){
        wallArray[i].drawWall();
    }
    // Creating Walls (traditional)
    //fill(255, 255, 255)
    //rect(30,30,50,50)
    //rect(30,80,20,70)
    //rect(0, 150, 70, 20)

    for(let i = 0; i < wallArray.length; i++){
        if(wallArray[i].isInside(xPos,yPos,25,25)){
        xPos = 12.5
        yPos = 487.5
    }
    }
    

}
class Wall{
    //Gets called when new Wall() is called
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    //Function for showing wall on canvas
    drawWall(){
        rect(this.x,this.y,this.w,this.h);
    }
    //Function used for hitbox
    isInside(xPos,yPos,w,h){
        //top left of this.x + the width to get the right side
        //inputX is the center of circle "- w/2" is to get the left side of circle

        let leftSide = this.x;
        let rightSide = this.x + this.w;
        let topSide = this.y;
        let bottomSide = this.y + this.h;

        let ballTop = yPos - h/2;
        let ballBottom = yPos + h/2;
        let ballLeft = xPos - w/2;
        let ballRight = xPos + w/2;


        if ((rightSide > ballLeft && leftSide < ballRight && topSide < ballBottom && ballTop < bottomSide)) {
                return true
        }
        else{
            return false;
        }
    }

}
