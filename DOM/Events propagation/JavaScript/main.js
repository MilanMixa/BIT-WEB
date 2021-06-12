var img = document.querySelectorAll("img");
var container = document.querySelector("container");
var flag = false;

var add = function(e){
    console.log(e.target)
        if(e.target.offsetWidth >= 300){
            e.target.style.border = "5px solid red"
        }

};

img.forEach(function(img){
    img.addEventListener("click", add);
})

function click(img){
    if(flag){
        if(img.target.offsetWidth >= 300){
            img.target.removeEventListener("click", add);
            img.target.style.border = "none";
            flag = false;
        }
    } else {
        if(img.target.offsetWidth >= 300){
            img.target.addEventListener("click", add);
            img.target.style.border = "5px solid red";
            flag = true;
        }
    }
}

img.forEach(function(img){
    img.addEventListener("click", click);
})