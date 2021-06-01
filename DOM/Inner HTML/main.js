var myArray = ["pocetna", "o nama", "kontakt"];
var myNewArray = ["email", "username", "phone", "password"]
var myElement = "div";

function create(array, div){
    var label = document.createElement("label");
    var select = document.createElement("select");
    for(var i = 0; i < array.length; i++){
        var option = document.createElement("option");
        option.innerHTML = array[i];
        select.appendChild(option);
    }

    var body = document.querySelector("body");
    var node = document.createElement(div);
    body.prepend(node);
    node.prepend(label);
    node.appendChild(select)
};

create(myArray, myElement);
create(myNewArray, myElement);