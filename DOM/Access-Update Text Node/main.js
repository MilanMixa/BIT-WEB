function alertMe(){
    var select = document.querySelector("li:first-child").textContent;
    alert(select);
};

alertMe();

function replaceText(string){
    var select = document.querySelector("li:last-child");
    select.textContent = string;
};

replaceText("Some random text")