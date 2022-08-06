//car code
let xPositionCar = [500, 500, 500, 500, 500, 500];
let yPositionCar = [46, 102, 156, 214, 268, 325];
let wCar = 40;
let hCar = 30;
let carSpeed = [2.7, 3.1, 2.3, 4, 3.5, 3];

function carShow(){
    for (let i = 0; i < carImage.length; i++){
        image(carImage[i], xPositionCar[i], yPositionCar[i], wCar, hCar);
    }
}

function carMove(){
    for (let v = 0; v < carImage.length; v++){
        xPositionCar[v] -= carSpeed[v];
    }
}

function carOutScreen (xPositionCar){
    return xPositionCar < -30;
}

function carRepeat(){
    for (let i = 0; i < carImage.length; i++){
        if (carOutScreen(xPositionCar[i])){
            xPositionCar[i] = 500;
        }
    }
}