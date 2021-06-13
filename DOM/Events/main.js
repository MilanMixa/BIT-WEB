// var colors = ["#20639B", "white"];
// var colorIndex = 0;
// function changeColor() {
//     var bodyColor = document.querySelector("body");
//     if( colorIndex >= colors.length ) {
//         colorIndex = 0;
//     }
//     bodyColor.style.backgroundColor = colors[colorIndex];
//     colorIndex++;  
// }

var intervalId;
var bodyNode = document.querySelector("body");

function changeColor() {
    intervalId = setInterval(function(){
        bodyNode.classList.toggle("bg-color");
    }, 3000);
};

function turnOff(){
    clearInterval(intervalId);
    bodyNode.classList.remove("bg-color")
};

