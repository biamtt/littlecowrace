function setup() {
  createCanvas(500, 400);
  soundTrack.loop();
}

function draw() {
  background(backg);
  actorShow();
  actorMove();
  carShow();
  carMove();
  carRepeat();
  checkCollision();
  scoreBoard();
  scorePoints();
  canMove();
}
