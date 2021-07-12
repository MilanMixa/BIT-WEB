const endpoint = "http://api.tvmaze.com/shows";
let main = document.querySelector(".main-div");
let top50 ={};

const xhr = new XMLHttpRequest();
xhr.open("GET", endpoint, true);
xhr.onload = function () {
    const request = JSON.parse(xhr.responseText);
    let rating = request.sort(function(a, b) {
        return b.rating.average - a.rating.average;
    })
    top50 = rating.slice(0, 50);
    top50.forEach(function(el){
        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("data-key", el.id);
        mainDiv.setAttribute("title-name", el.name);
        mainDiv.setAttribute("data-image", el.image.original)
        mainDiv.classList = "tv-div";
        console.log(mainDiv)
        let img = document.createElement("img");
        img.setAttribute("src", el.image.medium);
        let title = document.createElement("h4");
        title.textContent = el.name;
        main.append(mainDiv);
        mainDiv.append(img)
        mainDiv.append(title)
    })

    localStorage.clear();

    var div = document.querySelectorAll(".tv-div");
    div.forEach(function(el) {
        el.addEventListener("click", function(event) {
            event.preventDefault();
            let key = this.getAttribute("data-key");
            window.localStorage.setItem("id", key);
            
            let title = this.getAttribute("title-name");
            window.localStorage.setItem("show", title);

            let image = this.getAttribute("data-image");
            window.localStorage.setItem("tv-image", image)
            document.location = "tv-show.html"
        
        })
    })

}
xhr.send()
