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

function changeColor() {
    var bodyNode = document.querySelector("body");
    intervalId = setInterval(function(){
        bodyNode.classList.toggle("bg-color");
    }, 3000);
};


