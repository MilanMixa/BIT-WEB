var div = document.getElementById("main");
var text = document.getElementById("chat");
var button = document.getElementById("send");


var buttonHandler = function(){
    if(Validate(text.value)){
        var p = document.createElement("p");  
        p.innerHTML = text.value;
        text.value = "";
        div.appendChild(p);
    }
};

function Validate(string){
    if(string === "" || string === " "){
        return false;
    }else 
    {
        return true;
    }
};


button.addEventListener("click", buttonHandler);
text.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      button.click();
    }
  });