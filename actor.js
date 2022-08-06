//actor code
let xPositionActor = 92;
let yPositionActor = 370;
let collision = false;
let myScore = 0;

function actorShow(){
    image(actor, xPositionActor, yPositionActor, 30, 30);
}

function actorMove(){
    if (keyIsDown(UP_ARROW)){
        yPositionActor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
        if (canMove()){
        yPositionActor += 3;
        }
    }
}

function checkCollision(){
    for (let i = 0; i < carImage.length; i++){
        collision = collideRectCircle(xPositionCar[i], yPositionCar[i], wCar, hCar, xPositionActor, yPositionActor, 15)
        if (collision){
            startPositionActor();
            crashSound.play();
            if (scoreUp0()){
            myScore -= 1;
        }
        }
    }
}

function startPositionActor(){
    yPositionActor = 370;
}

function scoreBoard(){
    textSize(25);
    fill(255, 255, 0);
    text(myScore, width / 5, 27);
}

function scorePoints(){
    if (yPositionActor < 15){
        myScore += 1;
        scoreSound.play();
        startPositionActor();
    }
}

function scoreUp0(){
    return myScore > 0;
}

function canMove(){
    return yPositionActor < 370;
}