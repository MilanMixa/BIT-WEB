function selectSecond(){
  var second = document.querySelector("ul:nth-child(2)");
  second.className = "second";
};

selectSecond();



function selectAll(){
    var lists = document.querySelectorAll("ul li")
    lists.forEach(function(string) {
        string.className = "lis"
    });
};

selectAll();



function selectLast(){
    var li = document.querySelectorAll("ul:nth-child(3) li");
    li.forEach(function(string){
        string.className = "third";
    })
};

selectLast()
