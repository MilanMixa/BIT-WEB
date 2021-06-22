var $soccerPlayer = $("img");
var $soccerField = $("#footballField");
var $button = $("#send");
var isSet = true;

var playerHandler = function(event){
    var width = (event.offsetX - $soccerPlayer.width() / 2) + "px";
    var height =  (event.offsetY - $soccerPlayer.height() / 2) + "px";
    $soccerPlayer.css({
        left: width,
        top: height
    });
};

var stop = function(){
    if(isSet){
        $soccerField.off("click", playerHandler);
    } else {
        $soccerField.on("click", playerHandler);
    }
    isSet = !isSet;
};
$soccerField.on("click", playerHandler);
$button.on("click", stop);
