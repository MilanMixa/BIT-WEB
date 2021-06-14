var soccerPlayer = document.getElementById("player");
var soccerField = document.getElementById("footballField");
var button = document.getElementById("send");
var isSet = true;

var playerHandler = function(event){
    soccerPlayer.style.top = (event.offsetY - soccerPlayer.offsetHeight / 2) + "px";
    soccerPlayer.style.left = (event.offsetX - soccerPlayer.offsetWidth / 2) + "px";
};

var stop = function(){
    if(isSet){
        soccerField.removeEventListener("click", playerHandler);
    } else {
        soccerField.addEventListener("click", playerHandler);
    }
    isSet = !isSet;
};

soccerField.addEventListener("click", playerHandler);
button.addEventListener("click", stop);
