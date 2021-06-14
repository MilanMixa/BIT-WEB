var body = document.querySelector("body");
var mario = document.querySelector(".mario");
var container = document.querySelector(".main-container");
var xStart = 0;
var velocity = 20;

var moveRight = function (e){
    if(e.keyCode === 39){
        mario.setAttribute("src", "./img/mario_running.gif")
        body.removeEventListener("keydown", moveRight);
    }    
}

var moveLeft = function (e){
    if(e.keyCode === 37){
        mario.setAttribute("src", "./img/mario-running-left.gif")
        body.removeEventListener("keydown", moveLeft);
    }
}

var stopRunning = function(e){
    if(e.keyCode === 39){
        mario.src = "./img/mario.png";
        body.addEventListener("keydown", moveRight);
    }
    if(e.keyCode === 37){
        mario.src = "./img/mario.png";
        body.addEventListener("keydown", moveLeft);
    }
}

function moveBackground(x){
    xStart += x;
    container.style.backgroundPosition = xStart + "px 0";
}

var backgroundHandler = function(e){
    if(e.keyCode === 39){
        moveBackground(-velocity);
    }
    if(e.keyCode === 37){
        moveBackground(velocity);
    }
}

body.addEventListener("keydown", moveRight);
body.addEventListener("keydown", moveLeft);
body.addEventListener("keydown", backgroundHandler);
body.addEventListener("keyup", stopRunning);
