//image
let backg;
let actor;
let car0;
let car1;
let car2;
let crashSound;
let soundTrack;
let scoreSound;

function preload(){
    backg = loadImage ("image/estrada.png");
    actor = loadImage ("image/ator-1.png");
    car0 = loadImage ("image/carro-1.png");
    car1 = loadImage ("image/carro-2.png");
    car2 = loadImage ("image/carro-3.png");
    carImage = [car0, car1, car2, car0, car1, car2];
    crashSound = loadSound ("sound/crash.mp3");
    soundTrack = loadSound ("sound/track.mp3");
    scoreSound = loadSound ("sound/score.wav");
}